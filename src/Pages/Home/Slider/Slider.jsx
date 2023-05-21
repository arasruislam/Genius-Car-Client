import img1 from "../../../assets/images/homeCarousel/1.jpg";
import img2 from "../../../assets/images/homeCarousel/2.jpg";
import img3 from "../../../assets/images/homeCarousel/3.jpg";
import img4 from "../../../assets/images/homeCarousel/4.jpg";
const Slider = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] overflow-hidden rounded-lg">
        {/* Slider 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          {/* Slider Img */}
          <img src={img1} className="w-full h-full object-cover " />

          {/* Slider overlay text */}
          <div className="absolute top-0 bottom-0 h-full flex flex-col justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white space-y-4 pl-4 md:pl-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              Affordable Price For <br /> Car Servicing
            </h1>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn bg-red-500 border-red-500 hover:bg-transparent hover:border-white">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-red-500 hover:border-red-500">
                Latest Project
              </button>
            </div>
          </div>

          {/* Slider Button */}
          <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide4"
              className="btn btn-circle hover:bg-orange-500 transition-colors duration-200 border-none"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="btn btn-circle hover:bg-orange-500 transition-colors duration-200 border-none"
            >
              ❯
            </a>
          </div>
        </div>
        {/* Slider 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          {/* Slider Img */}
          <img src={img2} className="w-full h-full object-cover " />

          {/* Slider overlay text */}
          <div className="absolute top-0 bottom-0 h-full flex flex-col justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white space-y-4 pl-4 md:pl-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              Affordable Price For <br /> Car Servicing
            </h1>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn bg-red-500 border-red-500 hover:bg-transparent hover:border-white">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-red-500 hover:border-red-500">
                Latest Project
              </button>
            </div>
          </div>

          {/* Slider Button */}
          <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide1"
              className="btn btn-circle hover:bg-orange-500 transition-colors duration-200 border-none"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="btn btn-circle hover:bg-orange-500 transition-colors duration-200 border-none"
            >
              ❯
            </a>
          </div>
        </div>
        {/* Slider 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          {/* Slider Img */}
          <img src={img3} className="w-full h-full object-cover " />

          {/* Slider overlay text */}
          <div className="absolute top-0 bottom-0 h-full flex flex-col justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white space-y-4 pl-4 md:pl-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              Affordable Price For <br /> Car Servicing
            </h1>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn bg-red-500 border-red-500 hover:bg-transparent hover:border-white">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-red-500 hover:border-red-500">
                Latest Project
              </button>
            </div>
          </div>

          {/* Slider Button */}
          <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide2"
              className="btn btn-circle hover:bg-orange-500 transition-colors duration-200 border-none"
            >
              ❮
            </a>
            <a
              href="#slide4"
              className="btn btn-circle hover:bg-orange-500 transition-colors duration-200 border-none"
            >
              ❯
            </a>
          </div>
        </div>
        {/* Slider 4 */}
        <div id="slide4" className="carousel-item relative w-full">
          {/* Slider Img */}
          <img src={img4} className="w-full h-full object-cover " />

          {/* Slider overlay text */}
          <div className="absolute top-0 bottom-0 h-full flex flex-col justify-center bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] text-white space-y-4 pl-4 md:pl-8">
            <h1 className="text-4xl md:text-6xl font-bold">
              Affordable Price For <br /> Car Servicing
            </h1>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-4">
              <button className="btn bg-red-500 border-red-500 hover:bg-transparent hover:border-white">
                Discover More
              </button>
              <button className="btn btn-outline border-white text-white hover:bg-red-500 hover:border-red-500">
                Latest Project
              </button>
            </div>
          </div>

          {/* Slider Button */}
          <div className="absolute flex justify-end gap-8 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide3"
              className="btn btn-circle hover:bg-orange-500 transition-colors duration-200 border-none"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="btn btn-circle hover:bg-orange-500 transition-colors duration-200 border-none"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
