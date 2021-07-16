import Image from "next/image";
import LogoAgen from "../static/agen-telor-logo.png";

function Navbar() {
  return (
    <div className="px-5 text-xl shadow-xl md:px-96 md:py-2">
      <div className="flex justify-center">
        <div className="w-13 h-13">
          <Image src={LogoAgen} alt="Agen Telor Jakarta" />
        </div>
        {/* <div className="justify-around hidden space-x-5 md:flex md:block">
          <div>Home</div>
          <div>Galeri</div>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
