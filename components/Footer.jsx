import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IconContext } from "react-icons";

function Footer() {
  return (
    <div className="p-2 border-t-2 border-gray-200">
      <div className=" md:justify-around md:flex">
        <div className="flex justify-center mb-3 space-x-3">
          <IconContext.Provider
            value={{ color: "#03ac0e", className: "global-class-name" }}
          >
            <div>
              <IoLogoWhatsapp className="w-7 h-7" />
            </div>
          </IconContext.Provider>
          <div>088888888 (EA)</div>
        </div>
        <div className="flex justify-center mb-3 space-x-3">
          <FaPhoneAlt className="w-7 h-7" />
          <div>088888888 (EA)</div>
        </div>
        <div className="flex justify-center mb-3 space-x-3">
          Jalan Pancawarga 1, Jakarta Timur
        </div>
      </div>
      <hr />
      <div className="text-center">
        Created by Erba
      </div>
    </div>
  );
}

export default Footer;
