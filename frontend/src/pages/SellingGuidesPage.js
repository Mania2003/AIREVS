import React, { useState } from "react";
import { motion } from "framer-motion";
import PageTransition from "../components/Common/PageTransition";

const SellingGuidesPage = () => {
  const [activeGuide, setActiveGuide] = useState("how-to-sell");

  const guides = {
    "how-to-sell": {
      title: "How to Sell Property",
      steps: [
        {
          number: "01",
          title: "Market Research",
          description:
            "Analyze current market trends, recent sale prices, and buyer demand to estimate realistic pricing."
        },
        {
          number: "02",
          title: "Prepare the Property",
          description:
            "Clean, repair damages, and enhance curb appeal to increase interest and value."
        },
        {
          number: "03",
          title: "List Property Online",
          description:
            "Use online platforms like RealEstateAI to list your property with clear photos and details."
        },
        {
          number: "04",
          title: "Property Visits",
          description:
            "Respond to buyer inquiries quickly and schedule site visits to serious buyers."
        },
        {
          number: "05",
          title: "Legal Documentation",
          description:
            "Keep all required documents ready: ownership proof, tax receipts, and compliance certificates."
        },
        {
          number: "06",
          title: "Negotiation & Deal Closure",
          description:
            "Negotiate terms and pricing confidently and finalize documentation securely."
        }
      ]
    }
  };

  const selectedGuide = guides[activeGuide];

    return (
      <PageTransition>
        <div className="relative min-h-screen text-text-light px-6 py-16 overflow-hidden">
          {/* Soft gradient background */}
          <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 opacity-90" />
          {/* Animated blurred shapes */}
          <div className="pointer-events-none absolute top-10 left-10 w-72 h-72 rounded-full bg-cyan-400/20 blur-3xl animate-shape1" />
          <div className="pointer-events-none absolute bottom-20 right-20 w-80 h-80 rounded-full bg-purple-400/20 blur-3xl animate-shape2" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 w-60 h-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-400/20 blur-2xl animate-shape3" />
          <h1 className="text-4xl font-extrabold text-center mb-10 text-white tracking-wide drop-shadow-lg">
            {selectedGuide.title}
          </h1>

          <div className="max-w-5xl mx-auto space-y-8 relative z-10">
            {selectedGuide.steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-5 bg-bg-dark-card/90 p-7 rounded-2xl shadow-2xl border border-blue-800 hover:border-brand-accent transition-all duration-300"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-brand-accent to-blue-500 flex items-center justify-center text-2xl font-extrabold text-white shadow-lg">
                  {step.number}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-brand-accent mb-1">
                    {step.title}
                  </h2>
                  <p className="text-text-muted text-base">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </PageTransition>
    );
};

export default SellingGuidesPage;
