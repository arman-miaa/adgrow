import { Shield, CreditCard, Users } from "lucide-react";
import { FaArrowRight } from "react-icons/fa";

const AdgrowOffer = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Hero Headline */}
        <h1 className="text-4xl md:text-5xl  font-bold text-gray-800 mb-6 leading-tight">
          Start Optimizing Your <span className="text-blue-400">Meta Ads</span>{" "}
          Today
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed">
          Join the smart marketers who are boosting their ROAS with Adgrow's
          AI-powered platform
        </p>

        {/* Pricing Card */}
        <div className="bg-gray-100 rounded-2xl shadow-lg p-8 mb-8  mx-auto">
          <div className="flex items-center justify-center gap-6">
            {/* Regular Price */}
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Regular Price</p>
              <div className="relative">
                <span className="text-3xl font-bold text-gray-800 line-through">
                  $59
                </span>
                <p className="text-sm text-gray-500 mt-1">per month</p>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-blue-400">
              <FaArrowRight />
            </div>

            {/* Monthly Price */}
            <div className="text-center">
              <p className="text-sm text-blue-400 mb-1 font-medium">Monthly</p>
              <div>
                <span className="text-4xl font-bold text-gray-800">$49</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-blue-400 hover:bg-blue-400 cursor-pointer text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl mb-8 inline-flex items-center gap-2">
          Start Now
          <FaArrowRight />
        </button>

        {/* Trust Indicators */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-gray-600">
          <div className="flex items-center gap-2 bg-gray-200 rounded-2xl p-[7px]">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-sm">30-day money-back guarantee</span>
          </div>

          <div className="flex items-center gap-2 bg-gray-200 rounded-2xl p-[7px]">
            <CreditCard className="w-5 h-5 text-blue-400" />
            <span className="text-sm">No credit card required</span>
          </div>

          <div className="flex items-center gap-2 bg-gray-200 rounded-2xl p-[7px]">
            <Users className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Join 29+ satisfied customers</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdgrowOffer;
