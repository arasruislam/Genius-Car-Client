import About from "../../About/About";
import Address from "../Address/Address";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div className="mb-16">
      {/* Slider section */}
      <section className="pt-2 pb-12 px-2 lg:px-0">
        <Slider />
      </section>

      {/* About Us */}
      <About />

      {/* Services */}
      <section>
        <Services />
      </section>

      {/* Address */}
      <section className="my-20">
        <Address />
      </section>

      {/* Products */}
      <section>
        <Products />
      </section>

      
    </div>
  );
};

export default Home;
