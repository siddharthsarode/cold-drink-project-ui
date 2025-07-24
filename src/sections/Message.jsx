import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React from "react";

const Message = () => {
  useGSAP(() => {
    const firstMsgSplitText = SplitText.create(".first-message", {
      type: "words",
    });
    const secondMsgSplitText = SplitText.create(".second-message", {
      type: "words",
    });
    const paragraphSplitText = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    // console.log("para", paragraphSplitText);

    gsap.to(firstMsgSplitText.words, {
      color: "#faeade",
      stagger: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
        // markers: true,
      },
    });

    gsap.to(secondMsgSplitText.words, {
      color: "#faeade",
      stagger: 1,
      ease: "power1.in",
      scrollTrigger: {
        trigger: ".second-message",
        start: "top center",
        end: "bottom center",
        scrub: true,
        // markers: true,
      },
    });

    const tl = gsap.timeline({
      delay: 0.5,
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top 60%",
        // markers: true,
      },
    });

    tl.to(".msg-text-scroll", {
      duration: 1,
      ease: "circ.inOut",
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
    });

    const paraTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".message-content p",
        start: "top center",
      },
    });

    paraTl.from(paragraphSplitText.words, {
      stagger: 0.01,
      yPercent: 300,
      duration: 1,
      rotate: 3,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className="message-content">
      <div className="flex-center relative container mx-auto py-28">
        <div className="h-full w-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and</h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown px-5 pb-3 md:pb-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>

            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center mt-10 md:mt-20">
            <div className="flex-center max-w-md overflow-hidden px-10">
              <p>
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Message;
