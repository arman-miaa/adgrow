import { ArrowRight } from "lucide-react"; 

const Enterprise = () => {
  return (
    <div className="bg-white py-16">
   
      {/* Enterprise Section */}
      <div className="mt-12 bg-gray-50 rounded-xl p-6 sm:p-8 md:p-10 max-w-3xl mx-auto shadow-md border border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6">
       
        <div className="text-center md:text-left">
          <h4 className="font-bold text-xl text-gray-900 mb-2">Enterprise</h4>{" "}
       
          <p className="text-base text-gray-700 leading-relaxed mb-4 md:mb-0">
        
            Need a custom solution for your business? Our enterprise plan offers
            tailored features, dedicated support, and custom integrations.
          </p>
        </div>
        <button className="btn btn-outline bg-white border-gray-300  hover:bg-gray-100 hover:border-gray-400 font-medium px-6 py-3 rounded-lg flex items-center justify-center min-w-[150px]">
      
          Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-8 text-center">
        Used by 200+ businesses
      </p>
    </div>
  );
};

export default Enterprise;
