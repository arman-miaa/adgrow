
const FeatureCard = ({ feature,title, highlight, description, image }) => {
  return (
    <div
      className={`flex flex-col md:flex-row  items-center gap-6 mt-6 bg-[#f5faff] p-6 rounded-xl shadow-sm`}
    >
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-blue-500 bg-blue-100 w-fit px-4 py-1 rounded-full mb-4">
          {feature}
        </h4>
        <h3 className="text-xl md:text-4xl font-bold mb-2">
          {title} <span className="text-blue-600">{highlight}</span>
        </h3>
        <p className=" text-gray-600">{description}</p>
      </div>
      <div className="flex-1">
        <img src={image} alt="feature" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default FeatureCard;


<p className="text-sm font-semibold text-blue-500 bg-blue-100 w-fit mx-auto px-4 py-1 rounded-full mb-4">
  PLATFORM FEATURES
</p>;
