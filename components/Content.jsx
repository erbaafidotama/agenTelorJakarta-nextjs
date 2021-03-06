import { useState, useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import Image from "next/image";
import { useRouter } from "next/router";
import { v4 as uuid } from "uuid";
import { supabase } from "../api";
import useStore from "../lib/store";

import TelorKampung from "../static/telor-kampung.jpg";

const ListTelor = (props) => {
  const router = useRouter();
  const [telor, setTelor] = useState("");
  const addTelors = useStore((state) => state.addTelor);
  const telors = useStore((state) => state.telors);

  const onChange = (e) => {
    setTelor(e.target.value);
  };

  const addTelor = (e) => {
    let today = new Date();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const dd = String(today.getDate()).padStart(2, "0");
    // const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const month = monthNames[today.getMonth()];
    const yyyy = today.getFullYear();

    const todayFullDate = dd + "-" + month + "-" + yyyy;

    addTelors({
      jumlah_telor: telor,
      jenis_telor: props.jenis,
      harga_telor: props.harga,
      tanggal_beli: todayFullDate,
    });
    // clear();
    e.preventDefault();
    router.push("/checkout");
  };
  return (
    <div className="p-2 mb-5 border border-gray-300 rounded">
      <div className="grid grid-flow-col grid-rows-3 gap-4">
        <div className="row-span-3">
          <div className="w-15 h-15 md:w-48 md:h-48">
            <Image src={TelorKampung} alt="telor kampung" />
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex justify-center mb-3">{props.jenis}</div>
          <hr />
        </div>
        <div className="col-span-2 row-span-2">
          <div className="mb-5">Harga: Rp {props.harga},-</div>
          <div className="md:flex md:justify-between">
            <div className="flex">
              {/* <HiOutlineMinusCircle
                onClick={() => setCountTelorKampung(telorKampung - 1)}
                className="rounded-full cursor-pointer h-7 w-7 hover:bg-gray-400"
              /> */}
              <div>Jumlah: </div>
              <input
                className="w-20 text-lg text-center border-b border-gray-300"
                type="text"
                value={telor}
                onChange={onChange}
              />
              <div>kg</div>
              {/* {telorKampung} kg */}
              {/* <HiOutlinePlusCircle
                className="rounded-full cursor-pointer h-7 w-7 hover:bg-gray-400"
                onClick={() => setCountTelorKampung(telorKampung + 1)}
              /> */}
            </div>
            <div className="mt-3 text-center md:mt-0 md:text-left">
              <button
                onClick={addTelor}
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
  );
};

function Content() {
  const resetTelors = useStore((state) => state.resetTelor);
  const resetTransaksi = useStore((state) => state.resetTransaksi);
  const resetListTransaksi = useStore((state) => state.resetListTransaksi);
  const addListTransaksi = useStore((state) => state.addListTransaksi);
  const listTransaksi = useStore((state) => state.listTransaksi);
  const [dataTelors, setDataTelor] = useState([]);
  const [dataTransaksi, setDataTransaksi] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const handleCheckout = (e) => {
    e.preventDefault();
    router.push("/checkout");
  };

  useEffect(() => {
    resetTelors({});
    resetTransaksi({});
    resetListTransaksi();
    fetchTelor();
    fetchListTransaksi();
  }, []);

  async function fetchTelor() {
    const { data, error } = await supabase.from("tbl_telor").select();

    setDataTelor(data);
    setLoading(false);
  }

  async function fetchListTransaksi() {
    const { data } = await supabase.from("tbl_transaksi").select();
    addListTransaksi(data);
  }

  async function createNewPost() {
    // if (!title || !content) return;
    const user = supabase.auth.user();
    const id = uuid();
    // post.id = id;
    const { dataTelors } = await supabase
      .from("tbl_telor")
      .insert([
        {
          jenis_telor: "Telor Kampung",
          harga_telor: 15000,
          telor_uuid: id,
          description: "Telor Kampung",
        },
      ])
      .single();
  }

  if (loading) return <p className="text-2xl">Loading ...</p>;
  return (
    <div className="flex-grow py-5 md:px-96">
      <div className="p-5 bg-white shadow-xl ">
        {dataTelors.map((telor) => (
          <ListTelor
            key={telor.id}
            jenis={telor.jenis_telor}
            harga={telor.harga_telor}
            dataTransaksi={dataTransaksi}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
