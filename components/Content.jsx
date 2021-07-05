import { useState } from "react";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { IoMdCart } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/router";

import TelorKampung from "../static/telor-kampung.jpg";
import TelorNegeri from "../static/telor-negeri.jpg";

function Content() {
  const [telorKampung, setCountTelorKampung] = useState("");

  const router = useRouter();
  const handleCheckout = (e) => {
    e.preventDefault();
    router.push("/checkout");
  };

  return (
    <div className="flex-grow py-5 md:px-96">
      <div className="p-5 bg-white shadow-xl ">
        {/* Telor Kampung */}
        <div className="p-2 mb-5 border border-gray-300 rounded">
          <div className="grid grid-flow-col grid-rows-3 gap-4">
            <div className="row-span-3">
              <div className="w-48 h-48">
                <Image src={TelorKampung} alt="telor kampung" />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex justify-center mb-3">Telor Ayam Kampung</div>
              <hr />
            </div>
            <div className="col-span-2 row-span-2">
              <div className="mb-5">Harga: Rp 20.000,-</div>
              <div className="flex justify-between">
                <div className="flex">
                  <HiOutlineMinusCircle
                    onClick={() => setCountTelorKampung(telorKampung - 1)}
                    className="rounded-full cursor-pointer h-7 w-7 hover:bg-gray-400"
                  />
                  <input
                    className="w-20 text-lg text-center border-b border-gray-300"
                    type="text"
                    value={telorKampung}
                    onChange={() => {
                      console.log("1");
                    }}
                  />
                  {/* {telorKampung} kg */}
                  <HiOutlinePlusCircle
                    className="rounded-full cursor-pointer h-7 w-7 hover:bg-gray-400"
                    onClick={() => setCountTelorKampung(telorKampung + 1)}
                  />
                </div>
                <div>
                  <button
                    onClick={handleCheckout}
                    className=" py-2 px-4 rounded-xl text-white bg-green-tk hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ..."
                  >
                    <div className="flex justify-between space-x-2">
                      <IoMdCart className="mt-1" />
                      <div>Beli</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Telor Negeri */}
        <div className="p-2 mb-5 border border-gray-300 rounded ">
          <div className="grid grid-flow-col grid-rows-3 gap-4">
            <div className="row-span-3">
              <div className="w-48 h-48">
                <Image src={TelorNegeri} alt="telor negeri" />
              </div>
            </div>
            <div className="col-span-2">
              <div className="flex justify-center mb-3">Telor Ayam Kampung</div>
              <hr />
            </div>
            <div className="col-span-2 row-span-2">
              <div className="mb-5">Harga: Rp 20.000,-</div>
              <div className="flex justify-between">
                <div className="flex">
                  <HiOutlineMinusCircle
                    onClick={() => setCountTelorKampung(telorKampung - 1)}
                    className="rounded-full cursor-pointer h-7 w-7 hover:bg-gray-400"
                  />
                  <input
                    className="w-20 text-lg text-center border-b border-gray-300"
                    type="text"
                    value={telorKampung}
                    onChange={() => {
                      console.log("2");
                    }}
                  />
                  {/* {telorKampung} kg */}
                  <HiOutlinePlusCircle
                    className="rounded-full cursor-pointer h-7 w-7 hover:bg-gray-400"
                    onClick={() => setCountTelorKampung(telorKampung + 1)}
                  />
                </div>
                <div>
                  <button className=" py-2 px-4 rounded-xl text-white bg-green-tk hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                    <div className="flex justify-between space-x-2">
                      <IoMdCart className="mt-1" />
                      <div>Beli</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
