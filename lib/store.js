import create from "zustand";
import { devtools, persist } from "zustand/middleware";

let useStore = (set) => ({
  telors: {
    jumlah_telor: "",
    harga_telor: "",
    jenis_telor: "",
    tanggal_beli: "",
  },
  transaksi: {},
  listTransaksi: [],
  addTelor: (payload) =>
    set((state) => ({
      telors: {
        jumlah_telor: payload.jumlah_telor,
        harga_telor: payload.harga_telor,
        jenis_telor: payload.jenis_telor,
        tanggal_beli: payload.tanggal_beli,
      },
    })),
  resetTelor: () =>
    set((state) => ({
      telors: {},
    })),

  addTransaksi: (payload) =>
    set((state) => ({
      transaksi: {
        jenis_telor: payload.jenis_telor,
        harga_telor: payload.harga_telor,
        jumlah_beli_telor: payload.jumlah_telor,
        total_harga: payload.total_harga,
        nama_pembeli: payload.nama_pembeli,
        no_handphone_pembeli: payload.no_handphone_pembeli,
        alamat_pembeli: payload.alamat_pembeli,
        transaksi_uuid: payload.transaksi_uuid,
        tanggal_beli: payload.tanggal_beli,
        id: payload.id,
      },
    })),
  resetTransaksi: () =>
    set((state) => ({
      transaksi: {},
    })),
  addListTransaksi: (payload) =>
    set((state) => ({
      listTransaksi: payload,
    })),
  resetListTransaksi: () =>
    set((state) => ({
      listTransaksi: [],
    })),
});

useStore = devtools(useStore);

export default useStore = create(persist(useStore));
