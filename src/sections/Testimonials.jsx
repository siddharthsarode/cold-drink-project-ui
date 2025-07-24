import React, { useRef } from "react";
import { cards } from "../constants/constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Testimonials = () => {
  const vdRef = useRef([]);
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  useGSAP(() => {
    if (!isMobile) {
      gsap.set(".testimonials-section", {
        marginTop: "-140vh",
      });
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: isMobile ? "top 90%" : "top bottom",
        end: isMobile ? "150% top" : "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .second-title",
        {
          xPercent: 25,
        },
        "<",
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<",
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      ease: "power1.inOut",
      stagger: 0.2,
    });
  });

  const playVideo = (index) => {
    const video = vdRef.current[index];
    video.play();
  };

  const pauseVideo = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };

  return (
    <section className="testimonials-section">
      <div className="absolute flex size-full flex-col items-center pt-[5vw]">
        <h1 className="first-title text-black">What's</h1>
        <h1 className="text-light-brown second-title">Everyone</h1>
        <h1 className="third-title text-black">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => playVideo(index)}
            onMouseLeave={() => pauseVideo(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
