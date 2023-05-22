import { FaMapMarkedAlt, FaRegCalendarCheck, FaPhoneAlt } from "react-icons/fa";
const Address = () => {
  return (
    <div className="flex justify-start sm:justify-around items-center flex-wrap bg-[#151515] py-12 px-4 md:px-8 lg:px-4 space-y-4 lg:space-y-0  rounded-lg">
      {/* Calendar */}
      <div className="flex items-center gap-2">
        <FaRegCalendarCheck className="h-8 w-8 text-gray-300" />
        <div>
          <p className="text-sm text-gray-400">We are open monday-friday</p>
          <h3 className="text-2xl font-semibold text-gray-100">
            7:00 am - 9:00 pm
          </h3>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-2">
        <FaPhoneAlt className="h-8 w-8 text-gray-300" />
        <div>
          <p className="text-sm text-gray-400">Have a question?</p>
          <h3 className="text-2xl font-semibold text-gray-100">
            +2546 251 2658
          </h3>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-2">
        <FaMapMarkedAlt className="h-8 w-8 text-gray-300" />
        <div>
          <p className="text-sm text-gray-400">Need a repair? our address</p>
          <h3 className="text-2xl font-semibold text-gray-100">
            Liza Street, New York
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Address;
