import Image from "next/image";
import { useRouter } from "next/router";

import TelorKampung from "../static/telor-kampung.jpg";

function ContentCheckout() {
    const router = useRouter();
    const handleCheckoutInvoice = (e) => {
        e.preventDefault();
        router.push("/invoice");
      };

  return (
    <div className="flex-grow py-5 md:px-96">
      <div className="p-5 bg-white shadow-xl ">
        <div className="mb-2 text-xl text-center">Checkout Form</div>
        <hr />
        <div className="mt-2">Keranjang:</div>
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
              <div className="mb-5">Beli: 2kg</div>
              <div className="mb-5">Total: Rp 40.000,-</div>
            </div>
          </div>
        </div>

        <div>Mohon isi data diri untuk dilakukan konfirmasi oleh penjual</div>
        <hr />
        <div className="mt-3">
          <form>
            <div className="my-2">
              <label
                htmlFor="nama"
                className="block text-sm font-medium text-gray-700"
              >
                Nama
              </label>
              <input className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"></input>
            </div>
            <div className="my-2">
              <label
                htmlFor="nohp"
                className="block text-sm font-medium text-gray-700"
              >
                No. Handphone
              </label>
              <input className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"></input>
            </div>
            <div className="my-2">
              <label
                htmlFor="alamat"
                className="block text-sm font-medium text-gray-700"
              >
                Alamat
              </label>
              <textarea
                type="text-area"
                className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
              ></textarea>
            </div>

            <div>
              <button onClick={handleCheckoutInvoice} className=" py-2 px-4 rounded-xl text-white bg-green-tk hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                <div className="flex justify-between space-x-2">
                  <div>Checkout</div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContentCheckout;
