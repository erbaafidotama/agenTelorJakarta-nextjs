import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import useStore from "../lib/store";
import { v4 as uuid } from "uuid";

import TelorKampung from "../static/telor-kampung.jpg";
import { supabase } from "../api";
let dataFetch;

function ContentCheckout({ transaksi }) {
  const router = useRouter();
  const [values, setValues] = useState({
    nama_pembeli: "",
    no_handphone_pembeli: "",
    alamat_pembeli: "",
  });
  const [dataListTransaksi, setDataListTransaksi] = useState(null);
  const [loading, setLoading] = useState(true);
  const telors = useStore((state) => state.telors);
  const listTransaksi = useStore((state) => state.listTransaksi);
  let idLatsRecord;
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
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const month = monthNames[today.getMonth()];
  const yyyy = today.getFullYear();

  const todayFullDate = dd + mm + yyyy;

  useEffect(() => {
    // fethingListTransaksi();
    // const fetchDataTransaksi = async () => {
    //   const response = await supabase.from("tbl_transaksi").select("*");
    //   dataFetch = await response;
    //   setDataListTransaksi(dataFetch)
    // };
    // fetchDataTransaksi();
    if (transaksi) {
      setLoading(false);
    }
    if (telors.length < 1) {
      router.push("/");
    }
  }, [transaksi, telors.length, router]);

  // async function fethingListTransaksi() {
  //   const { dataFetching, error } = await supabase
  //     .from("tbl_transaksi")
  //     .select("*");
  //
  //   dataFetch = dataFetching;
  // }

  console.log("listTransaksi", listTransaksi);
  idLatsRecord = listTransaksi[listTransaksi.length - 1].id
    ? parseInt(listTransaksi[listTransaksi.length - 1].id) + 1
    : 1;

  const handleNamaPembeliInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      nama_pembeli: event.target.value,
    }));
  };

  const handleNoHandphoneInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      no_handphone_pembeli: event.target.value,
    }));
  };

  const handleAlamatPembeliInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      alamat_pembeli: event.target.value,
    }));
  };

  const totalHarga =
    parseFloat(telors.harga_telor) * parseFloat(telors.jumlah_telor);

  async function handleCreateNewTransaction() {
    const transaksi_uuid = uuid();
    const { data } = await supabase
      .from("tbl_transaksi")
      .insert([
        {
          jenis_telor: telors.jenis_telor,
          harga_telor: parseFloat(telors.harga_telor),
          jumlah_beli_telor: parseFloat(telors.jumlah_telor),
          total_harga: totalHarga,
          nama_pembeli: values.nama_pembeli,
          no_handphone_pembeli: values.no_handphone_pembeli,
          alamat_pembeli: values.alamat_pembeli,
          transaksi_uuid: transaksi_uuid,
          tanggal_beli: telors.tanggal_beli,
          invoice_id: todayFullDate + "-" + idLatsRecord,
        },
      ])
      .single();

    router.push(`/invoice/${data.transaksi_uuid}`);
  }

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
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
              <div className="mb-5">Harga: Rp {telors.harga_telor},-</div>
              <div className="mb-5">Beli: {telors.jumlah_telor}kg</div>
              <div className="mb-5">
                Total: Rp {totalHarga}
                ,-
              </div>
            </div>
          </div>
        </div>

        <div>Mohon isi data diri untuk dilakukan konfirmasi oleh penjual</div>
        <hr />
        <div className="mt-3">
          {/* <form> */}
          <div className="my-2">
            <label
              htmlFor="nama"
              className="block text-sm font-medium text-gray-700"
            >
              Nama
            </label>
            <input
              id="nama_pembeli"
              name="nama_pembeli"
              value={values.nama_pembeli}
              onChange={handleNamaPembeliInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="nohp"
              className="block text-sm font-medium text-gray-700"
            >
              No. Handphone
            </label>
            <input
              id="no_handphone_pembeli"
              name="no_handphone_pembeli"
              value={values.no_handphone_pembeli}
              onChange={handleNoHandphoneInputChange}
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="alamat"
              className="block text-sm font-medium text-gray-700"
            >
              Alamat
            </label>
            <textarea
              id="alamat_pembeli"
              name="alamat_pembeli"
              value={values.alamat_pembeli}
              onChange={handleAlamatPembeliInputChange}
              type="text-area"
              className="w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent"
            />
          </div>

          <div>
            <button
              onClick={handleCreateNewTransaction}
              className="px-4 py-2 text-white rounded-xl bg-green-tk hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
            >
              <div className="flex justify-between space-x-2">
                <div>Checkout</div>
              </div>
            </button>
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default ContentCheckout;

export async function getStaticPaths() {
  const { data, error } = await supabase.from("tbl_transaksi").select("*");
  const paths = data.map((post) => ({
    params: { id: JSON.stringify(post.id) },
  }));
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await supabase.from("tbl_transaksi").select("*");
  return {
    props: {
      transaksi: data,
    },
  };
}
