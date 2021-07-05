import Image from "next/image";
import Agen from "/static/agen-telur-jakarta.jpg";
function Header() {
  return (
    <div className="relative mt-6 px-96">
      <Image src={Agen} alt="agen" layout="fill" objectFit="cover" className="w-screen"/>
    </div>
  );
}

export default Header;
