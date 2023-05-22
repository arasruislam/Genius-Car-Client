import { FaStar } from "react-icons/fa";
import img1 from "../../../assets/images/products/1.png";
const Products = () => {
  return (
    <div>
      {/* Service Text Area */}
      <div className="space-y-4 grid place-items-center">
        <h4 className="text-md text-[#FF3811] font-bold pl-2">
          Popular Products
        </h4>
        <h1 className="text-4xl lg:text-5xl font-bold">Browse Our Products</h1>
        <p className="text-gray-500 text-center max-w-2xl">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>

      {/* Service Card */}
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4 mt-8">
        {/* Single Card Information */}
        <div className="card w-72 bg-base-100 shadow-lg border-2 border-gray-200">
          {/* Image */}
          <figure className="px-5 pt-6">
            <img
              src={img1}
              alt="Shoes"
              className="rounded-xl bg-gray-100 w-[300px] h-[200px] p-4"
            />
          </figure>
          {/* Information */}
          <div className="card-body items-center text-center py-4">
            <p className="flex gap-1 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="card-title">Electrical System</h2>
            <p className="font-semibold text-red-500">$20.00</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-lg border-2 border-gray-200">
          {/* Image */}
          <figure className="px-5 pt-6">
            <img
              src={img1}
              alt="Shoes"
              className="rounded-xl bg-gray-100 w-[300px] h-[200px] p-4"
            />
          </figure>
          {/* Information */}
          <div className="card-body items-center text-center py-4">
            <p className="flex gap-1 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="card-title">Electrical System</h2>
            <p className="font-semibold text-red-500">$20.00</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-lg border-2 border-gray-200">
          {/* Image */}
          <figure className="px-5 pt-6">
            <img
              src={img1}
              alt="Shoes"
              className="rounded-xl bg-gray-100 w-[300px] h-[200px] p-4"
            />
          </figure>
          {/* Information */}
          <div className="card-body items-center text-center py-4">
            <p className="flex gap-1 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="card-title">Electrical System</h2>
            <p className="font-semibold text-red-500">$20.00</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-lg border-2 border-gray-200">
          {/* Image */}
          <figure className="px-5 pt-6">
            <img
              src={img1}
              alt="Shoes"
              className="rounded-xl bg-gray-100 w-[300px] h-[200px] p-4"
            />
          </figure>
          {/* Information */}
          <div className="card-body items-center text-center py-4">
            <p className="flex gap-1 text-orange-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <h2 className="card-title">Electrical System</h2>
            <p className="font-semibold text-red-500">$20.00</p>
          </div>
        </div>
      </div>

      {/* More Service Button */}
      <div className="flex justify-center mt-8">
        <button className="custom-outline-btn">More Products</button>
      </div>
    </div>
  );
};

export default Products;
