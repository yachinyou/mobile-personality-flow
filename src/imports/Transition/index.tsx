import { useEffect, useRef } from "react";
import videoTrees from "./trees-background.mp4";

const END_BUFFER_SECONDS = 6;

export default function TransitionOverlay({ label, seedKey }: { label?: string; seedKey: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // The video plays continuously in the background for the whole session — never
  // paused between transitions. Pausing and resuming right as we seek is what
  // caused the "sometimes doesn't play" bug: seeking triggers a brief internal
  // buffering ("waiting") state, and calling play()/pause() around that moment
  // races the browser and can leave it stuck paused on the seeked frame. Instead,
  // only resume (if needed) after the seek has fully settled.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const seekToRandomSegment = () => {
      const maxStart = Math.max(video.duration - END_BUFFER_SECONDS, 0);
      const resumeIfPaused = () => {
        if (video.paused) video.play().catch(() => {});
      };
      video.addEventListener("seeked", resumeIfPaused, { once: true });
      video.currentTime = Math.random() * maxStart;
    };

    if (video.readyState >= 1) {
      seekToRandomSegment();
    } else {
      video.addEventListener("loadedmetadata", seekToRandomSegment, { once: true });
      return () => video.removeEventListener("loadedmetadata", seekToRandomSegment);
    }
  }, [seedKey]);

  // If the browser paused the video for its own reasons (e.g. the tab was
  // backgrounded mid-quiz), resume as soon as it's visible again.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const resume = () => {
      if (!document.hidden && video.paused) video.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", resume);
    return () => document.removeEventListener("visibilitychange", resume);
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover pointer-events-none"
        src={videoTrees}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
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
