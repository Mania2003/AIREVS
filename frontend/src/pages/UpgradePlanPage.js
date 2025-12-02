import React from 'react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'List up to 3 properties',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Current Plan',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹499/mo',
    features: [
      'Unlimited property listings',
      'Advanced analytics',
      'Priority email support',
      'Featured agent badge',
    ],
    cta: 'Upgrade to Pro',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Contact Us',
    features: [
      'Custom solutions',
      'Dedicated account manager',
      'API access',
      'Premium support',
    ],
    cta: 'Contact Sales',
    highlight: false,
  },
];

const UpgradePlanPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Upgrade Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border p-6 flex flex-col items-center shadow-md transition-transform duration-200 hover:scale-105 ${plan.highlight ? 'border-blue-600 bg-blue-50' : 'border-gray-200 bg-white'}`}
            >
              <h3 className={`text-xl font-bold mb-2 ${plan.highlight ? 'text-blue-700' : 'text-gray-800'}`}>{plan.name}</h3>
              <div className="text-2xl font-extrabold mb-4">{plan.price}</div>
              <ul className="mb-6 space-y-2 text-gray-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded font-semibold transition ${plan.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                disabled={plan.cta === 'Current Plan'}
                onClick={() => {
                  if (plan.cta === 'Contact Sales') {
                    window.location = 'mailto:sales@realestateai.com';
                  } else if (plan.cta === 'Upgrade to Pro') {
                    alert('Upgrade process coming soon!');
                  }
                }}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            className="text-blue-600 hover:underline font-semibold"
            onClick={() => navigate(-1)}
          >
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradePlanPage;
