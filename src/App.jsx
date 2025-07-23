import { ReactLenis } from "lenis/react";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Message from "./sections/Message";
import Flavor from "./sections/Flavor";
import Nutrition from "./sections/Nutrition";
import Benefit from "./sections/Benefit";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <ReactLenis
        root
        options={{
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
          smoothWheel: true,
          smoothTouch: false,
        }}
      />
      <main>
        <Navbar />
        <Hero />
        <Message />
        <Flavor />
        <Nutrition />
        <div>
          <Benefit />
          <Testimonials />
        </div>
        <Footer />
        <div className="h-dvh bg-gray-700"></div>
      </main>
    </>
  );
};

export default App;
