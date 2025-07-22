import FlavorSlider from "../components/FlavorSlider";
import FlavorTitle from "../components/FlavorTitle";

const Flavor = () => {
  return (
    <section className="flavor-section">
      <div className="relative flex h-full flex-col items-center lg:flex-row">
        <div className="h-80 flex-none md:mt-20 lg:h-full lg:w-[57%] xl:mt-0">
          <FlavorTitle />
        </div>
        <div className="h-full">
          <FlavorSlider />
        </div>
      </div>
    </section>
  );
};

export default Flavor;
