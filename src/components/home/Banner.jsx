import { FaFacebook } from "react-icons/fa";
import { Sparkles } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

const Banner = () => {
  return (
    <section className="text-center mt-20 px-4 py-20 bg-gradient-to-b from-blue-50/30 to-white">
      {/* AI Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-50  rounded-full border border-blue-100 mx-auto mb-6">
        <Sparkles className="w-4 h-4 text-blue-500" />
        AI-POWERED
      </div>

      {/* Main Heading */}
      <div>
        <div className="flex justify-center flex-col md:flex-row ">
          <h1 className="text-4xl md:text-7xl font-bold text-gray-900 leading-tight ">
            Create Ads{" "}
          </h1>
          
          <span className="inline-flex  mx-auto  items-center gap-3 md:mx-2 mb-4 ">
            <FaFacebook className="text-blue-600 w-8 h-8 md:w-8 md:h-8 p-1  border border-gray-300 rounded-lg " />
            <FcGoogle className=" w-8 h-8 md:w-8 md:h-8 p-1 border border-gray-300 rounded-lg " />
          </span>
        </div>
        <h1 className="text-4xl md:text-7xl  -mt-4 font-bold text-blue-600 leading-tight ">
          with Just 1 Click!
        </h1>
        <hr className="w-2/5 mx-auto h-1 border-0 rounded bg-gradient-to-r from-blue-300 via-blue-600 to-blue-300" />
      </div>

      {/* Sub Text */}
      <p className="text-gray-600 mt-2 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed">
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
              <div className="flex items-center gap-2 text-blue-500 font-medium text-sm mr-2 flex-shrink-0">
                
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center">
                  <div className="w-1 h-1 bg-white rounded-full" />
                </div>
                https://
              </div>

              <input
                type="text"
                placeholder="yourstore/product/service"
                className="input border-0 focus:outline-none focus:ring-0 w-full text-sm bg-transparent p-2 h-auto"
              />
            </div>
          </div>

          {/* Button */}
          <button className="btn bg-blue-500 mt-1 hover:bg-blue-600 text-white font-medium px-8 py-4 md:py-6 rounded-full shadow-lg text-sm md:text-base whitespace-nowrap">
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
