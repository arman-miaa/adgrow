
const FeatureCard = ({ feature,title, highlight, description, image }) => {
  return (
    <div
      className={`flex flex-col md:flex-row  items-center gap-6 mt-36 bg-gray-100 p-6 rounded-2xl shadow-xl`}
    >
      <div className="flex-1">
        <h4 className="text-sm font-semibold text-blue-500 bg-blue-100 w-fit px-4 py-1 rounded-full mb-4">
          {feature}
        </h4>
        <h3 className="text-xl md:text-5xl font-bold mb-2">
          {title} <span className="text-blue-600">{highlight}</span>
        </h3>
        <p className=" text-gray-600 text-xl mt-4">{description}</p>
      </div>
      <div className="flex-1">
        <img src={image} alt="feature" className="w-full h-auto rounded-2xl p-2  " />
      </div>
    </div>
  );
};

export default FeatureCard;


<p className="text-sm font-semibold text-blue-500 bg-blue-100 w-fit mx-auto px-4 py-1 rounded-full mb-4">
  PLATFORM FEATURES
</p>;
