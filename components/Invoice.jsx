import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { FiPhoneCall, FiDownload } from "react-icons/fi";
import ReactWhatsapp from "react-whatsapp";
import domtoimage from "dom-to-image";

import { supabase } from "../api";
import useStore from "../lib/store";

import TelorKampung from "../static/telor-kampung.jpg";

const ListItemTransaksi = (props) => {
  return (
    <tr className="item">
      <td>
        {props.jenisTelor} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; x
        &nbsp;
        {props.jumlahBeli}kg
      </td>

      <td>Rp{props.hargaTelor},-</td>
    </tr>
  );
};

function Invoice({ transaksi }) {
  const router = useRouter();
  const { slug } = router.query;
  const [dataTransaksi, setDataTransaksi] = useState([]);
  const [loading, setLoading] = useState(true);
  const addTransaksi = useStore((state) => state.addTransaksi);
  const dbDataTransaksi = useStore((state) => state.transaksi);

  let dataUseTransaksi;
  if (dataTransaksi) {
    dataUseTransaksi = dataTransaksi;
  } else {
    dataUseTransaksi = dbDataTransaksi;
  }

  useEffect(() => {
    if (slug !== undefined) {
      fetchTransaksi();
    }
  }, []);

  async function fetchTransaksi() {
    const uuid = slug;
    const { data, error } = await supabase
      .from("tbl_transaksi")
      .select()
      .filter("transaksi_uuid", "eq", uuid)
      .single();

    addTransaksi(data);

    setDataTransaksi(data);
    setLoading(false);
  }

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

  today = dd + mm + yyyy;
  const todayFullDate = dd + " " + month + " " + yyyy;

  const handleDownlaodInvoice = () => {
    domtoimage
      .toJpeg(document.getElementById("invoice"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  if (loading && !dbDataTransaksi)
    return <p className="text-2xl">Loading ...</p>;
  return (
    <div className="flex-grow p-3">
      <div className="p-3 border-2 border-gray-200 rounded-md">
        <div className="bg-white invoice-box">
          <div id="invoice" className="bg-white">
            <table cellPadding="0" cellSpacing="0" id="invoice-table">
              <tr className="top">
                <td colSpan="2">
                  <table>
                    <tr>
                      <td className="title">
                        <Image
                          src={TelorKampung}
                          width={100}
                          height={100}
                          alt="company"
                        />
                      </td>

                      <td>
                        {/* Invoice #: {today}-{dataUseTransaksi.id} */}
                        Invoice #: {dataTransaksi.invoice_id}
                        <br />
                        {/* Created: January 1, 2015 */}
                        {dataUseTransaksi.tanggal_beli}
                        {/* <br />
                      Due: February 1, 2015 */}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr className="information">
                <td colSpan="2">
                  <table>
                    <tr>
                      <td>
                        Agen Telor Jakarta
                        <br />
                        Jalan Pancawarga 1
                        <br />
                        Jakarta Timur
                      </td>

                      <td>
                        {dataUseTransaksi.nama_pembeli}
                        <br />
                        {dataUseTransaksi.alamat_pembeli}
                        <br />
                        {dataUseTransaksi.no_handphone_pembeli}
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              {/* <tr className="heading">
              <td>Payment Method</td>

              <td>Check #</td>
            </tr>

            <tr className="details">
              <td>Check</td>

              <td>1000</td>
            </tr> */}

              <tr className="heading">
                <td>Item</td>

                <td>Price</td>
              </tr>

              {/* <tr className="item">
              <td>{dataUseTransaksi.jenis_telor}</td>

              <td>Rp{dataUseTransaksi.total_harga},-</td>
            </tr> */}
              <ListItemTransaksi
                key={dataUseTransaksi.id}
                hargaTelor={dataUseTransaksi.harga_telor}
                jenisTelor={dataUseTransaksi.jenis_telor}
                jumlahBeli={dataUseTransaksi.jumlah_beli_telor}
              />

              {/* <tr className="item">
              <td>Hosting (3 months)</td>

              <td>$75.00</td>
            </tr>

            <tr className="item last">
              <td>Domain name (1 year)</td>

              <td>$10.00</td>
            </tr> */}

              <tr className="total">
                <td></td>

                <td>Total: Rp{dataUseTransaksi.total_harga},-</td>
              </tr>
            </table>
          </div>
          <div className="mt-5">
            <div className="flex space-x-5">
              <button
                onClick={handleDownlaodInvoice}
                className="px-4 py-2 text-white rounded-xl bg-green-tk hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              >
                <div className="flex justify-between space-x-2">
                  <FiDownload />
                  <div>Download Invoice</div>
                </div>
              </button>
              <ReactWhatsapp
                number="1-212-736-5000"
                message={
                  "Hello, Saya sudah memesan tolor dengan Invoice ID: " +
                  dataTransaksi.invoice_id
                }
                className="px-4 py-2 text-white rounded-xl bg-green-tk hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
              >
                <div className="flex justify-between space-x-2">
                  <FiPhoneCall />
                  <div>Hubungi Penjual</div>
                </div>
              </ReactWhatsapp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Invoice;
