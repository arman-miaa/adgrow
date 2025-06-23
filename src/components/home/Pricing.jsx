import { useState } from "react";
import { FaStar } from "react-icons/fa";

import { TiTick } from "react-icons/ti";
import Enterprise from "./Enterprise";
const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  // Pricing data based on toggle
  const weeklyPrice = isAnnual ? "15.9" : "19.9";
  const monthlyPrice = isAnnual ? "119" : "149";

  const weeklySub = isAnnual ? "$1034.8 billed annually" : "Billed weekly";
  const monthlySub = isAnnual ? "$1788 billed annually" : "Billed monthly";

  return (
    <div id="pricing" className="py-16 px-4 text-center">
      <p className="flex items-center justify-center gap-1 text-sm font-medium text-blue-600 mb-2 px-3 py-1 rounded text-center">
        <FaStar className="w-4 h-4 mb-1 " />
        Pricing
      </p>

      <h2 className="text-3xl md:text-6xl font-bold mb-4">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-500 mb-8 text-xl max-w-xl mx-auto">
        Choose the perfect plan to optimize your Meta Ads and boost your ROAS
      </p>

      {/* Toggle Switch */}
      <div className="flex items-center justify-center gap-4 mb-12">
        <span
          className={`text-sm font-medium transition ${
            !isAnnual ? "text-black font-semibold" : "text-gray-500"
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
          className={`text-sm font-medium transition  ${
            isAnnual ? "text-black font-semibold" : "text-gray-500"
          }`}
        >
          Annual
          <span
            className={`text-xs ml-1 px-2 py-0.5 rounded-full font-semibold bg-green-100 text-green-700`}
          >
            Save 25%
          </span>
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-6 justify-center items-start max-w-5xl mx-auto">
        {/* Weekly Plan */}
        <div className=" relative border border-blue-400 rounded-lg p-6 text-left shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg text-gray-800">
              Professional - Weekly
            </h3>
            <span className="text-xs absolute -top-3 right-50 text-white bg-blue-400 px-2 py-1 rounded-full font-semibold">
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
          <p className="text-xs text-gray-400 mb-4 mt-4">{weeklySub}</p>
          <p className="text-sm text-green-500 mb-4">
            First week special price
          </p>
          <button className="w-full bg-blue-400 text-white py-2 rounded-md font-semibold hover:bg-blue-500 transition ">
            Start Now →
          </button>
          <hr className="mt-6 text-gray-400" />
          <ul className="mt-6 space-y-4 font-semibold text-gray-700">
            <h3 className="font-bold">What's Included</h3>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              1 Click setup – Faster & smarter than manual work
            </li>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              4X ROI – AI continuously optimizes performance
            </li>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              Save 49% – Smarter bidding & budget control
            </li>
            <li className="flex items-center gap-2 font-normal">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              Unlimited Ad Account
            </li>
            <li className="flex items-center gap-2 font-normal">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              Unlimited Ad Spend
            </li>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              AI forecast – Predict & adjust for max impact
            </li>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              100+ AI audiences – Target high-value customers
            </li>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              Auto ads & testing – AI creates & optimizes creatives
            </li>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              10 AI Ad Creative
            </li>
          </ul>
        </div>

        {/* Monthly Plan */}
        <div className="border border-gray-400 h-full rounded-lg p-6 text-left shadow-md">
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

          <hr className="mt-6 text-gray-400" />
          <ul className="mt-6 space-y-4 font-semibold text-gray-700">
            <h3 className="font-bold">What's Included</h3>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              1 Click setup – Faster & smarter than manual work
            </li>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              4X ROI – AI continuously optimizes performance
            </li>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              Save 49% – Smarter bidding & budget control
            </li>
            <li className="flex items-center gap-2 font-normal">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              Unlimited Ad Account
            </li>
            <li className="flex items-center gap-2 font-normal">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              Unlimited Ad Spend
            </li>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              AI forecast – Predict & adjust for max impact
            </li>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              100+ AI audiences – Target high-value customers
            </li>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              Auto ads & testing – AI creates & optimizes creatives
            </li>
            <li className="flex items-center gap-2">
              <TiTick className="text-blue-400 bg-blue-200  rounded-full w-6 h-6" />
              10 AI Ad Creative
            </li>
          </ul>
        </div>
      </div>

   <Enterprise/>
    </div>
  );
};

export default Pricing;
