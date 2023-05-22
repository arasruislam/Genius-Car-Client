import img1 from "../../../assets/images/services/1.jpg";
import { HiArrowSmallRight } from "react-icons/hi2";

const Services = () => {
  return (
    <div>
      {/* Service Text Area */}
      <div className="space-y-4 grid place-items-center">
        <h4 className="text-md text-[#FF3811] font-bold pl-2">Service</h4>
        <h1 className="text-4xl lg:text-5xl font-bold">Our Service Area</h1>
        <p className="text-gray-500 text-center max-w-2xl">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>

      {/* Service Card */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 mt-8">
        {/* Single Card Information */}
        <div className="card w-72 bg-base-100 shadow-lg border-2 border-gray-200">
          <figure className="px-5 pt-5">
            <img src={img1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body p-4">
            <h2 className="card-title">Electrical System</h2>
            <p className="font-semibold text-red-500">Price: $20.00</p>
            <div className="card-actions justify-end">
              <button className="hover:scale-125 duration-300 transition-all">
                <HiArrowSmallRight className="h-6 w-6 text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* More Service Button */}
      <div className="flex justify-center mt-8">
        <button className="custom-outline-btn">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
