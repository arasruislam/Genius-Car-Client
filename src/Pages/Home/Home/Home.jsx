import About from "../../About/About";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      {/* Slider section */}
      <section className="pt-2 pb-12 px-2 lg:px-0">
        <Slider />
      </section>

      {/* About Us */}
      
        <About />
      
    </div>
  );
};

export default Home;
