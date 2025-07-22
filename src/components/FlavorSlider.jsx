import { useGSAP } from "@gsap/react";
import { flavorLists } from "../constants/constants";
import gsap from "gsap";
import { useRef } from "react";

const FlavorSlider = () => {
  const sliderRef = useRef();

  useGSAP(() => {
    if (!sliderRef.current) return;
    const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-section",
        start: "2% top",
        end: `+=${scrollAmount + 1000}px`,
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.to(".flavor-section", {
      x: `-${scrollAmount + 1000}px`,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors">
        {flavorLists.map((flavor) => (
          <div
            key={flavor.name}
            className={`relative z-30 h-80 w-96 flex-none md:h-[50vh] md:w-[90vw] lg:h-[70vh] lg:w-[50vw] ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              alt=""
              className="absolute bottom-0"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
              className="elements"
            />

            <h1>{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
