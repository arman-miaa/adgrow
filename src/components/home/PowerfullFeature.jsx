import powerfull1 from "../../assets/powerfull1.png";
import powerfull2 from "../../assets/powerfull2.png";
import powerfull3 from "../../assets/powerfull3.png";
import FeatureCard from "../../shared/FeatureCard";

const PowerfullFeature = () => {
  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">
      <p className="text-center text-xs text-blue-500 font-semibold mb-1">
        POWERFUL FEATURES
      </p>
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        You’ll get more results{" "}
        <span className="text-blue-600">& better performance</span>
      </h2>

      <div className="space-y-8">
        <FeatureCard
          title="Optimize your campaigns with"
          highlight="1 click"
          description="With just a single tap, let AI work hard to improve performance! Boom, your ads are optimized. Set your campaign to automatically adjust based on AI recommendations."
          image={powerfull1}
        />
        <FeatureCard
          title="Get actionable insights from"
          highlight="any data source"
          description="Easily unify Meta Ads account and track all key performance metrics. Get performance insights, and actionable recommendations to improve your ROAS."
          image={powerfull2}
          
        />
        <FeatureCard
          title="Set up rules that work"
          highlight="while you sleep"
          description="Create automation based on your account KPIs and make adjustment-based decisions to optimize your traffic."
          image={powerfull3}
        />
      </div>
    </div>
  );
};

export default PowerfullFeature;
