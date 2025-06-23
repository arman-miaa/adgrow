
const FeatureCard = ({ title, highlight, description, image }) => {
  return (
    <div
      className={`flex flex-col md:flex-row  items-center gap-6 bg-[#f5faff] p-6 rounded-xl shadow-sm`}
    >
      <div className="flex-1">
        <h4 className="text-blue-500 font-semibold text-sm mb-1">FEATURE</h4>
        <h3 className="text-xl font-bold mb-2">
          {title} <span className="text-blue-600">{highlight}</span>
        </h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="flex-1">
        <img src={image} alt="feature" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default FeatureCard;
