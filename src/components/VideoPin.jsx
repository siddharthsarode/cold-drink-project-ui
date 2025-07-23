import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const VideoPin = () => {
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  useGSAP(() => {
    if (!isMobile) {
      const videoTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".vd-pin-section",
          start: "-15% top",
          end: "200% top",
          scrub: 1.5,
          pin: true,
          // markers: true,
        },
      });

      videoTl.to(".video-box", {
        ease: "power1.inOut",
        clipPath: "circle(100% at 50% 50%)",
      });
    }
  }, []);

  return (
    <section className="vd-pin-section">
      <div
        style={{
          clipPath: isMobile
            ? "circle(100% at 50% 50%)"
            : "circle(9% at 50% 50%)",
        }}
        className="video-box size-full"
      >
        <video
          src="/videos/pin-video.mp4"
          playsInline
          autoPlay
          loop
          muted
        ></video>

        <div className="abs-center scale-200 md:scale-100">
          <img src="/images/circle-text.svg" alt="" className="spin-circle" />
          <div className="play-btn">
            <img
              src="/images/play.svg"
              alt=""
              className="ml-[.5vw] size-[3vw]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPin;
