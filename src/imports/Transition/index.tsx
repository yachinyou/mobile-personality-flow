import videoTrees from "./trees-background.mp4";

const END_BUFFER_SECONDS = 6;

export default function TransitionOverlay({ label }: { label?: string } = {}) {
  return (
    <>
      <video
        className="absolute inset-0 size-full object-cover pointer-events-none"
        src={videoTrees}
        autoPlay
        muted
        loop
        playsInline
        onLoadedMetadata={(e) => {
          const video = e.currentTarget;
          const maxStart = Math.max(video.duration - END_BUFFER_SECONDS, 0);
          video.currentTime = Math.random() * maxStart;
        }}
      />
      {label && (
        <div
          className="absolute rounded-full"
          style={{
            top: "213px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "250px",
            height: "250px",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.28) 55%, rgba(255,255,255,0) 100%)",
            backdropFilter: "blur(2px)",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="font-['Serafina:Regular',sans-serif] italic leading-[normal] text-[#392c68] text-[26px] text-center lowercase">
              {label}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
