import mainVideo from "../assets/001.mp4";

const VideoSec = () => {
  return (
    <div className="w-full text-gray-300">
      <div className="w-full h-[50vh]">
        <video
          src={mainVideo}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  );
};

export default VideoSec;
