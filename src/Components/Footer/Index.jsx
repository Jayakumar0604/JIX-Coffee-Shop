import { FaFacebookSquare, FaInstagram, FaRss } from "react-icons/fa";
import bgImage from "../../assets/Foot.jpg"; // Ensure this path is correct

const ContactSection = () => {
  return (
    <div className="w-full text-white font-sans">
      {/* Main Section */}
      <div className="flex flex-col md:flex-row w-full">
        {/* Left: COME ON IN */}
        <div
          className="flex-1 bg-cover bg-center bg-no-repeat bg-fixed px-6 md:px-12 py-12"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="bg-black/60 p-6 md:p-8 rounded-md w-full max-w-md">
            <h2 className="text-3xl oswald-Medium mb-6 tracking-wide">
              COME ON IN!
            </h2>
            <div className="space-y-3 text-[#DCA57D] text-sm md:text-base">
              <div>
                <p className=" pb-1 text-lg md:text-xl">WEEKDAYS: </p>
                <span className="nunito-sans-font text-white">08PM - 12AM</span>
              </div>
              <div className="text-[#DCA57D]">
                <p className="pb-1text-lg md:text-xl">WEEKENDS:</p>
                <span className="nunito-sans-font text-white">12PM - 02AM</span>
              </div>
            </div>
            <button className="mt-8 bg-[#DCA57D] hover:bg-[#0b69d4] text-white px-6 py-2  text-sm md:text-base oswald-Medium transition-colors duration-200">
              VIEW THE MENU
            </button>
          </div>
        </div>

        {/* Right: CONTACT */}
        <div className="flex-1 bg-black oswald-Medium px-6 md:px-12 py-12 flex items-center">
          <div className="max-w-md  w-full">
            <h2 className="text-3xl oswald-Medium mb-6 tracking-wide">
              CONTACT
            </h2>
            <div className="space-y-4   text-[#cccccc]">
              <div>
                <span className="nunito-sans-font text-lg md:text-xl text-[#DCA57D]">PHONE:</span>
                <p className="md:text-base text-sm">+(91) 98765 43210</p>
              </div>
              <div>
                <span className="nunito-sans-font text-lg md:text-xl text-[#DCA57D]">MAIL:</span>
                <p className="md:text-base  text-sm">jix.coffee@gmail.com</p>
              </div>
              <div>
                <span className="nunito-sans-font text-lg md:text-xl text-[#DCA57D]">
                  ADDRESS:
                </span>
                <p className="md:text-base text-sm">543 Th, Main street, Pudukkottai, Tamilnadu</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-black py-6 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-[#cccccc] text-sm md:text-base border-t border-white/10">
        <p className="mb-4 md:mb-0">
          Powered by <span className="text-white">JIX Cofee Shop</span>
        </p>
        <div className="flex space-x-5 text-xl">
          <a
            href="#"
            className="hover:text-[#2ea3f2] transition-colors duration-200"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="#"
            className="hover:text-[#2ea3f2] transition-colors duration-200"
          >
            <FaRss />
          </a>
          <a
            href="#"
            className="hover:text-[#2ea3f2] transition-colors duration-200"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
