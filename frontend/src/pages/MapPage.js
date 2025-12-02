// src/pages/PriceTrendsMapPage.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import PageTransition from "../components/Common/PageTransition";
import "leaflet/dist/leaflet.css";

/*
  PriceTrendsMapPage
  - Uses reliable CircleMarker markers (works consistently across bundlers)
  - Clicking a marker updates the chart and info cards
  - Map smoothly flies to selected locality
  - Uses corrected coordinates for Bangalore localities
*/

// --- Localities data (names, coordinates, status, trends) ---
const LOCALITIES = [
  {
    key: "Whitefield",
    name: "Whitefield",
    coords: [12.9690, 77.7499],
    status: "High Growth",
    color: "#ff5722",
    trends: [
      { month: "June", price: 8800 },
      { month: "July", price: 9000 },
      { month: "Aug", price: 9300 },
      { month: "Sep", price: 9400 },
      { month: "Oct", price: 9600 },
      { month: "Nov", price: 9700 },
    ],
  },
  {
    key: "Koramangala",
    name: "Koramangala",
    coords: [12.9352, 77.6245],
    status: "Premium Market",
    color: "#4caf50",
    trends: [
      { month: "June", price: 10500 },
      { month: "July", price: 10700 },
      { month: "Aug", price: 10900 },
      { month: "Sep", price: 11100 },
      { month: "Oct", price: 11300 },
      { month: "Nov", price: 11450 },
    ],
  },
  {
    key: "Sarjapur",
    name: "Sarjapur",
    coords: [12.8995, 77.7025], // corrected to Sarjapur Road region
    status: "Upcoming Area",
    color: "#03a9f4",
    trends: [
      { month: "June", price: 8100 },
      { month: "July", price: 8200 },
      { month: "Aug", price: 8300 },
      { month: "Sep", price: 8500 },
      { month: "Oct", price: 8600 },
      { month: "Nov", price: 8800 },
    ],
  },
  {
    key: "Hebbal",
    name: "Hebbal",
    coords: [13.0365, 77.5966],
    status: "Stable Market",
    color: "#9c27b0",
    trends: [
      { month: "June", price: 9100 },
      { month: "July", price: 9200 },
      { month: "Aug", price: 9300 },
      { month: "Sep", price: 9500 },
      { month: "Oct", price: 9700 },
      { month: "Nov", price: 9800 },
    ],
  },
  {
    key: "Electronic City",
    name: "Electronic City",
    coords: [12.8448, 77.6601],
    status: "Fast Developing",
    color: "#e91e63",
    trends: [
      { month: "June", price: 7400 },
      { month: "July", price: 7600 },
      { month: "Aug", price: 7800 },
      { month: "Sep", price: 7900 },
      { month: "Oct", price: 8100 },
      { month: "Nov", price: 8300 },
    ],
  },
  {
    key: "HSR Layout",
    name: "HSR Layout",
    coords: [12.9121, 77.6403],
    status: "Residential Hub",
    color: "#ff9800",
    trends: [
      { month: "June", price: 9200 },
      { month: "July", price: 9350 },
      { month: "Aug", price: 9500 },
      { month: "Sep", price: 9650 },
      { month: "Oct", price: 9750 },
      { month: "Nov", price: 9850 },
    ],
  },
  {
    key: "Yelahanka",
    name: "Yelahanka",
    coords: [13.0946, 77.5710],
    status: "Emerging North Hub",
    color: "#8bc34a",
    trends: [
      { month: "June", price: 8300 },
      { month: "July", price: 8450 },
      { month: "Aug", price: 8600 },
      { month: "Sep", price: 8750 },
      { month: "Oct", price: 8900 },
      { month: "Nov", price: 9100 },
    ],
  },
  {
    key: "Marathahalli",
    name: "Marathahalli",
    coords: [12.9600, 77.6986],
    status: "Connector Hub",
    color: "#3f51b5",
    trends: [
      { month: "June", price: 8600 },
      { month: "July", price: 8700 },
      { month: "Aug", price: 8800 },
      { month: "Sep", price: 8900 },
      { month: "Oct", price: 9020 },
      { month: "Nov", price: 9150 },
    ],
  },
];

// Default center of Bengaluru
const BENGALURU_CENTER = [12.9716, 77.5946];

// Helper component: fly map to coords when selected changes
const FlyToLocation = ({ coords, zoom = 13 }) => {
  const map = useMap();
  useEffect(() => {
    if (!coords || !map) return;
    map.flyTo(coords, zoom, { duration: 1.2 });
  }, [coords, zoom, map]);
  return null;
};

const PriceTrendsMapPage = () => {
  const [selectedKey, setSelectedKey] = useState("Whitefield");
  const selected = LOCALITIES.find((l) => l.key === selectedKey) || LOCALITIES[0];

  // compute growth rate
  const first = selected.trends[0].price;
  const last = selected.trends[selected.trends.length - 1].price;
  const growthRate = (((last - first) / first) * 100).toFixed(1);

  // marker radius scale (small example based on latest price)
  const getRadiusFromPrice = (price) => {
    // scale price (7000..12000) -> radius 6..16
    const minP = 7000;
    const maxP = 12000;
    const minR = 6;
    const maxR = 16;
    const clamped = Math.max(minP, Math.min(maxP, price));
    const t = (clamped - minP) / (maxP - minP);
    return Math.round(minR + t * (maxR - minR));
  };

  return (
    <PageTransition>
      <div className="relative w-full min-h-screen pt-28 pb-10 overflow-hidden">
        {/* Soft radial gradient background */}
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_60%_40%,_#1e3a8a_0%,_#0e172a_100%)]" />
        {/* Animated blurred shapes */}
        <div className="pointer-events-none absolute top-10 left-10 w-80 h-80 rounded-full bg-cyan-400/20 blur-3xl animate-shape1" />
        <div className="pointer-events-none absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl animate-shape2" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 w-72 h-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-400/20 blur-2xl animate-shape3" />
        <div className="max-w-7xl mx-auto py-10 px-4 text-text-light relative z-10">
        <h1 className="text-4xl font-extrabold text-white mb-4">
          Bengaluru Price Trends — Map & Insights
        </h1>
        <p className="text-text-muted mb-6">
          Click a location on the map to view its 6-month price trend and summary.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map column */}
          <div className="lg:col-span-2">
            <div className="h-[560px] w-full rounded-xl overflow-hidden shadow-2xl border border-gray-700">
              <MapContainer
                center={BENGALURU_CENTER}
                zoom={11}
                style={{ height: "100%", width: "100%" }}
              >
                <FlyToLocation coords={selected.coords} zoom={13} />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {LOCALITIES.map((loc) => (
                  <CircleMarker
                    key={loc.key}
                    center={loc.coords}
                    radius={getRadiusFromPrice(loc.trends[loc.trends.length - 1].price)}
                    pathOptions={{
                      color: loc.color,
                      fillColor: loc.color,
                      fillOpacity: 0.8,
                      weight: selectedKey === loc.key ? 3 : 1.5,
                    }}
                    eventHandlers={{
                      click: () => setSelectedKey(loc.key),
                    }}
                  >
                    <Popup>
                      <div style={{ color: "#000" }}>
                        <strong>{loc.name}</strong>
                        <br />
                        Status: {loc.status}
                        <br />
                        Avg Price: ₹{loc.trends[loc.trends.length - 1].price} / sq.ft
                        <br />
                        <small>Click marker to view trend</small>
                      </div>
                    </Popup>
                  </CircleMarker>
                ))}
              </MapContainer>
            </div>

            {/* quick location buttons */}
            <div className="flex flex-wrap gap-2 mt-4">
              {LOCALITIES.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setSelectedKey(l.key)}
                  className={`px-3 py-2 rounded-md text-sm font-medium border ${
                    selectedKey === l.key ? "border-brand-secondary bg-brand-secondary/20" : "border-gray-700"
                  }`}
                >
                  {l.name}
                </button>
              ))}
            </div>
          </div>

          {/* Info & chart column */}
          <div>
            <div className="bg-bg-dark-card p-6 rounded-xl shadow-lg mb-6 border border-gray-700">
              <h2 className="text-2xl font-semibold text-brand-accent mb-1">
                {selected.name}
              </h2>
              <p className="text-text-muted mb-3">{selected.status}</p>
              <p className="text-text-light mb-1">
                Current Avg:{" "}
                <span className="font-bold">₹{last.toLocaleString()}</span> / sq.ft
              </p>
              <p className="text-text-light mb-1">
                Growth (6 months):{" "}
                <span className="font-bold text-brand-secondary">{growthRate}%</span>
              </p>
              <p className="text-sm text-text-muted mt-3">
                Note: Prices shown are simulated / aggregated from dataset.
              </p>
            </div>

            <div className="bg-bg-dark-card p-4 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-brand-accent mb-3">6-Month Trend</h3>
              <div style={{ width: "100%", height: 320 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={selected.trends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip contentStyle={{ backgroundColor: "#111", border: "none" }} />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#f97316"
                      strokeWidth={3}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4">
              <div className="bg-bg-dark-card p-4 rounded-xl border border-gray-700">
                <h4 className="text-sm text-text-muted">Investment Suggestion</h4>
                <p className="mt-2 text-text-light">
                  {selected.key === "Sarjapur"
                    ? "Good for long-term growth; infrastructure projects planned."
                    : selected.key === "Koramangala"
                    ? "Premium area — higher entry price but stable returns."
                    : selected.key === "Electronic City"
                    ? "Affordable with strong appreciation potential."
                    : selected.key === "Whitefield"
                    ? "High demand from IT professionals — good rental yield."
                    : "Balanced locality with reliable connectivity."}
                </p>
              </div>

              <div className="bg-bg-dark-card p-4 rounded-xl border border-gray-700">
                <h4 className="text-sm text-text-muted">Data Tips</h4>
                <ul className="list-disc ml-5 mt-2 text-text-light text-sm">
                  <li>Connect this page to your /api/price-trends for live updates.</li>
                  <li>Use per-property filters (bedrooms, sqft) for custom predictions.</li>
                  <li>Color/size of markers are now driven by latest average price.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default PriceTrendsMapPage;