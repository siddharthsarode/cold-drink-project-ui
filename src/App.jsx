import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Message from "./sections/Message";
import Flavor from "./sections/Flavor";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Flavor />
          <div className="h-dvh bg-gray-700"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
