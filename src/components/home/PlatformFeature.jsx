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
      "Boost CTR by 300% with Proven Templates",
      "Effortless AI Video Creation and Image ads",
      "Integrated with Virtual Photoshoots",
    ],
  },
  {
    id: 3,
    title: "Analysis Campaigns",
    icon: <BarChart3 className="w-4 h-4" />,
    image: featureImg3,
    steps: [
      "Get comprehensive campaign insights",
      "AI-Powered Performance Analysis",
      "Identify optimization opportunities",
    ],
  },
  {
    id: 4,
    title: "Optimize & Publish",
    icon: <Settings2 className="w-4 h-4" />,
    image: featureImg4,
    steps: [
      "One-Click AI Optimization",
      "Direct Publishing to Meta Ads",
      "Performance Analytics Dashboard",
    ],
  },
];

const PlatformFeature = () => {
  const [activeTab, setActiveTab] = useState(1);
  const current = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="bg-gray-100 py-20 mt-16 px-4 text-center">
      {/* Title */}
      <div className="max-w-3xl mx-auto mb-10">
        <p className="text-sm font-semibold text-blue-500 bg-blue-100 w-fit mx-auto px-4 py-1 rounded-full mb-4">
          PLATFORM FEATURES
        </p>
        <h2 className="text-4xl  md:text-5xl font-bold text-gray-800">
          Complete <span className="text-blue-400">Meta Ads</span> Workflow
        </h2>
        <p className="text-gray-600 mt-5 text-lg">
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
            className={`px-6 py-4 cursor-pointer rounded-lg   flex items-center gap-2 font-medium  transition 
              ${
                activeTab === tab.id
                  ? "bg-white text-blue-600 shadow-2xl shadow-gray-300 "
                  : " text-gray-700 border-gray-200 hover:bg-gray-100"
              }`}
          >
            <span className="text-black"> {tab.icon}</span>
            {tab.title}
          </button>
        ))}
      </div>

      {/* Dynamic Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 container mx-auto bg-gray-100 rounded-xl shadow-lg p-10">
        {/* Left Text */}
        <div className=" rounded-2xl p-6 md:w-1/2 text-left">
          <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-blue-500 mr-1 bg-blue-100 px-4 py-2 rounded-xl ">
              {current.id}
            </span>
            {current.title}
          </h3>
          <ul className="text-gray-700 space-y-3 pl-4 text-lg">
            {current.steps.map((step, index) => (
              <li key={index} className="flex items-start gap-2">
                {/* Blue bullet icon */}
                <span className="text-blue-500 mt-1 text-base">+</span>

                {/* Highlight AI / Meta / Keywords */}
                <span>
                  {step.split(" ").map((word, i) =>
                    [
                      "AI Powered ",
                      "Powered",
                      "AI",

                      "Meta",
                      "instantly",
                      "high-quality",
                      "automated",
                      "Targeting",
                      "Manager",
                      "300%",
                      "Video",
                      "Creation",
                      "Performance",
                      "Analysis",
                      "Optimization",
                    ].includes(word) ? (
                      <span key={i} className="text-blue-500 font-medium">
                        {word}{" "}
                      </span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <div className="w-2/3">
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
