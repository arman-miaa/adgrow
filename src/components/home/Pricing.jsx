import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Pricing data based on toggle
  const weeklyPrice = isAnnual ? "15.9" : "19.9";
  const monthlyPrice = isAnnual ? "119" : "149";

  const weeklySub = isAnnual ? "$1034.8 billed annually" : "Billed weekly";
  const monthlySub = isAnnual ? "$1788 billed annually" : "Billed monthly";

  return (
    <div id="pricing" className="py-16 px-4 text-center">
      <p className="text-sm font-medium text-blue-600 mb-2">📌 Pricing</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-500 mb-8 max-w-xl mx-auto">
        Choose the perfect plan to optimize your Meta Ads and boost your ROAS
      </p>

      {/* Toggle Switch */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span
          className={`text-sm font-medium transition ${
            !isAnnual ? "text-blue-600 font-semibold" : "text-gray-700"
          }`}
        >
          Monthly
        </span>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isAnnual}
            onChange={() => setIsAnnual(!isAnnual)}
          />
          <div className="w-11 h-6 bg-gray-200 peer-checked:bg-blue-600 rounded-full transition-all"></div>
          <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all peer-checked:translate-x-5"></div>
        </label>

        <span
          className={`text-sm font-medium transition ${
            isAnnual ? "text-blue-600 font-semibold" : "text-gray-700"
          }`}
        >
          Annual{" "}
          <span
            className={`text-xs ml-1 px-2 py-0.5 rounded-full font-semibold ${
              isAnnual
                ? "bg-green-100 text-green-700"
                : "bg-gray-100 text-gray-400"
            }`}
          >
            Save 25%
          </span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-6 justify-center items-start max-w-5xl mx-auto">
        {/* Weekly Plan */}
        <div className="border border-blue-500 rounded-lg p-6 text-left shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg text-gray-800">
              Professional - Weekly
            </h3>
            <span className="text-xs text-white bg-blue-500 px-2 py-1 rounded-full font-semibold">
              MOST POPULAR
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-4">
            Perfect for growing businesses
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            ${weeklyPrice}
            <span className="text-sm font-normal">/week</span>
          </h2>
          <p className="text-xs text-gray-400 mb-1">{weeklySub}</p>
          <p className="text-sm text-green-600 mb-4">
            First week special price
          </p>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition">
            Start Now →
          </button>

          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>✅ 1 Click setup – Faster & smarter than manual work</li>
            <li>✅ 4X ROI – AI continuously optimizes performance</li>
            <li>✅ Save 49% – Smarter bidding & budget control</li>
            <li>✅ Unlimited Ad Account</li>
            <li>✅ Unlimited Ad Spend</li>
            <li>✅ AI forecasts – Predict & adjust for max impact</li>
            <li>✅ 100+ AI audiences – Target high-value customers</li>
            <li>✅ Auto ads & testing – AI creates & optimizes creatives</li>
            <li>✅ 10 AI Ad Creatives</li>
          </ul>
        </div>

        {/* Monthly Plan */}
        <div className="border rounded-lg p-6 text-left shadow-md">
          <h3 className="font-bold text-lg text-gray-800 mb-1">
            Professional - Monthly
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Perfect for growing businesses
          </p>
          <h2 className="text-3xl font-bold text-gray-800 mb-1">
            ${monthlyPrice}
            <span className="text-sm font-normal">/month</span>
          </h2>
          <p className="text-xs text-gray-400 mb-4">{monthlySub}</p>
          <button className="w-full border border-gray-300 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
            Start Now →
          </button>

          <ul className="mt-6 space-y-2 text-sm text-gray-700">
            <li>✅ 1 Click setup – Faster & smarter than manual work</li>
            <li>✅ 4X ROI – AI continuously optimizes performance</li>
            <li>✅ Save 49% – Smarter bidding & budget control</li>
            <li>✅ Unlimited Ad Account</li>
            <li>✅ Unlimited Ad Spend</li>
            <li>✅ AI forecasts – Predict & adjust for max impact</li>
            <li>✅ 100+ AI audiences – Target high-value customers</li>
            <li>✅ Auto ads & testing – AI creates & optimizes creatives</li>
            <li>✅ 10 AI Ad Creatives</li>
          </ul>
        </div>
      </div>

      {/* Enterprise Section */}
      <div className="mt-12 bg-gray-50 rounded-xl p-6 max-w-3xl mx-auto shadow-sm">
        <h4 className="font-bold text-lg text-gray-800 mb-2">Enterprise</h4>
        <p className="text-sm text-gray-600 mb-4">
          Need a custom solution for your business? Our enterprise plan offers
          tailored features, dedicated support, and custom integrations.
        </p>
        <button className="bg-white border border-gray-300 px-4 py-2 rounded-md font-medium hover:bg-gray-100">
          Book a Demo →
        </button>
        <p className="text-xs text-gray-400 mt-4">Used by 200+ businesses</p>
      </div>
    </div>
  );
};

export default Pricing;
