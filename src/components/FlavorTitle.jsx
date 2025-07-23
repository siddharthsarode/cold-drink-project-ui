import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstTextSplit = SplitText.create(".first-text-split h1", {
      type: "chars",
    });
    const secondTextSplit = SplitText.create(".second-text-split h1", {
      type: "chars",
    });

    gsap.from(firstTextSplit.chars, {
      stagger: 0.02,
      ease: "power1.inOut",
      yPercent: 200,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 30%",
        // markers: true,
      },
    });

    gsap.to(".flavor-text-scroll", {
      duration: 1,
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 10%",
      },
    });

    gsap.from(secondTextSplit.chars, {
      stagger: 0.02,
      ease: "power1.inOut",
      yPercent: 200,
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top 1%",
        // markers: true,
      },
    });

    // parallax effect
    const textParallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "top top",
        end: "bottom 80%",
        scrub: 2,
        // markers: true,
      },
      delay: 1,
    });

    textParallaxTl
      .to(".first-text-split", {
        xPercent: -20,
        ease: "power1.inOut",
      })
      .to(
        ".flavor-text-scroll",
        {
          xPercent: -12,
          ease: "power1.inOut",
        },
        "<",
      )
      .to(
        ".second-text-split",
        {
          xPercent: -5,
          ease: "power1.inOut",
        },
        "<",
      );
  }, []);

  return (
    <div className="general-title col-center h-full gap-16 xl:gap-24 2xl:gap-32">
      <div className="first-text-split overflow-hidden py-3 2xl:py-0">
        <h1>We have 6</h1>
      </div>
      <div
        style={{
          clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown px-3 pt-3 pb-5 2xl:px-5 2xl:pt-0">
          <h2 className="text-milk">freaking</h2>
        </div>
      </div>

      <div className="second-text-split overflow-hidden py-3 2xl:py-0">
        <h1>delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
