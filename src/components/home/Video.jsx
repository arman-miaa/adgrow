import video from "../../assets/video.mp4";

const Video = () => {
  return (
    <div className="w-full px-4 py-10">
      <video
        className="w-full h-auto rounded-lg shadow-md"
        controls
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
