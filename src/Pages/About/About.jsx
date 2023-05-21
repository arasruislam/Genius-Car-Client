import parts from "../../assets/images/about_us/parts.jpg";
import person from "../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="flex flex-col-reverse md:flex-col lg:flex-row items-center gap-12 p-2">
      {/* Image Section */}
      <div className="flex-1 sm:w-full md:w-9/12 lg:w-full relative">
        <img src={person} className="rounded-lg h-[473px] w-[470px] object-cover" alt="About Section Image" />
        <img src={parts} className="absolute -bottom-20 shadow right-0 h-[332px] w-[327px] object-cover rounded-xl border-8 border-white" alt="About Section Image" />
      </div>
      {/* Content Section */}
      <div className="flex-1 space-y-4 md:mt-12 lg:mt-0">
        <h4 className="text-md text-[#FF3811] font-bold border-l-2 border-red-400 pl-2">
          About Us
        </h4>
        <h1 className="text-4xl lg:text-5xl font-bold">
          We are qualified <br /> & of experience in this field
        </h1>
        <p className="text-gray-500 text-justify">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly believable.{" "}
        </p>
        <p className="text-gray-500 text-justify">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly believable.{" "}
        </p>
        <button className="custom-btn">Get More Info</button>
      </div>
    </div>
  );
};

export default About;
