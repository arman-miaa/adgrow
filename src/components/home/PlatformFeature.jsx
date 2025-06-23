import { useState } from "react";
import { BadgeCheck, Image, BarChart3, Settings2 } from "lucide-react";
import featureImg1 from "../../assets/Pfeature1.png";
import featureImg2 from "../../assets/Pfeature2.png";
import featureImg3 from "../../assets/Pfeature3.png";
import featureImg4 from "../../assets/Pfeature4.png";

const tabs = [
  {
    id: 1,
    title: "Create Campaign",
    icon: <BadgeCheck className="w-4 h-4" />,
    image: featureImg1,
    steps: [
      "Set up targeted campaigns with ease",
      "Define audience and campaign goals",
      "Leverage AI Powered Targeting",
    ],
  },
  {
    id: 2,
    title: "Create Image Ads",
    icon: <Image className="w-4 h-4" />,
    image: featureImg2,
    steps: [
      "AI generates high-quality visuals",
      "Edit & customize easily",
      "Save ready-to-use creative assets",
    ],
  },
  {
    id: 3,
    title: "Analysis Campaigns",
    icon: <BarChart3 className="w-4 h-4" />,
    image: featureImg3,
    steps: [
      "Track ad performance metrics",
      "Identify trends & user behavior",
      "Get actionable insights instantly",
    ],
  },
  {
    id: 4,
    title: "Optimize & Publish",
    icon: <Settings2 className="w-4 h-4" />,
    image: featureImg4,
    steps: [
      "Adjust targeting based on data",
      "Publish directly to Meta Ads Manager",
      "Automated optimization suggestions",
    ],
  },
];

const PlatformFeature = () => {
  const [activeTab, setActiveTab] = useState(1);
  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="bg-[#f9fafb] py-20 px-4 text-center">
      {/* Title */}
      <div className="max-w-3xl mx-auto mb-10">
        <p className="text-sm font-semibold text-blue-600 bg-blue-100 w-fit mx-auto px-4 py-1 rounded-full mb-2">
          PLATFORM FEATURES
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Complete <span className="text-blue-500">Meta Ads</span> Workflow
        </h2>
        <p className="text-gray-600 mt-3">
          Everything you need to create, optimize, and scale your Meta ads in
          one platform
        </p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2 rounded-full text-sm border flex items-center gap-2 font-medium shadow-sm transition 
              ${
                activeTab === tab.id
                  ? "bg-blue-100 text-blue-600 border-blue-200"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
          >
            {tab.icon}
            {tab.title}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        {/* Left Text */}
        <div className="bg-white shadow-lg rounded-2xl p-6 md:w-1/2 text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-blue-500 bg-blue-100 px-3 py-1 rounded-full text-sm">
              {current.id}
            </span>
            {current.title}
          </h3>
          <ul className="text-gray-700 space-y-3 pl-4 list-disc">
            {current.steps.map((step, index) => (
              <li key={index}>
                {step.includes("AI") ? (
                  <span className="text-blue-500 font-medium underline cursor-pointer">
                    {step}
                  </span>
                ) : (
                  step
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src={current.image}
            alt={current.title}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default PlatformFeature;
