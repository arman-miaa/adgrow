import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Sparkles } from "lucide-react";

const Banner = () => {
  return (
    <section className="text-center mt-24 px-4 py-20 bg-gradient-to-b from-blue-50/30 to-white">
      {/* AI Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-50 text-blue-600 rounded-full border border-blue-100 mx-auto mb-6">
        <Sparkles className="w-4 h-4" />
        AI-POWERED
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
        Create Ads{" "}
        <span className="inline-flex items-center gap-3 mx-2">
          <FaFacebook className="text-blue-600 w-8 h-8 md:w-12 md:h-12" />
          <FaGoogle className="text-red-500 w-8 h-8 md:w-12 md:h-12" />
        </span>
        <br />
        <span className="text-blue-600">with Just 1 Click!</span>
      </h1>

      {/* Sub Text */}
      <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
        Our AI-powered platform transforms your products into high-converting
        Meta ads that{" "}
        <span className="text-blue-600 font-semibold">boost ROAS by 40%</span>{" "}
        with minimal effort.
      </p>

      {/* Input & Button */}
      <div className="max-w-2xl mx-auto mb-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch">
          {/* Input Group */}
          <div className="flex-1 relative">
            <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 px-4 py-4 md:py-3">
              <div className="text-blue-500 font-medium text-sm mr-2 flex-shrink-0">
                https://
              </div>
              <input
                type="text"
                placeholder="yourstore/product/service"
                className="input border-0 focus:outline-none focus:ring-0 w-full text-sm bg-transparent p-0 h-auto"
              />
            </div>
          </div>

          {/* Button */}
          <button className="btn bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 md:py-3 rounded-full shadow-lg text-sm md:text-base whitespace-nowrap">
            Transform My Ads →
          </button>
        </div>
      </div>

      {/* Hint Text */}
      <p className="text-sm text-gray-500 max-w-lg mx-auto">
        Enter your product URL and watch our AI transform it into a
        high-converting ad
      </p>
    </section>
  );
};

export default Banner;
