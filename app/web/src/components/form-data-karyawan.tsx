/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";

export default ({ children, title }) => {
  if (title === "Tambah Data Karyawan") {
    var method = "POST";
    var actionn = "";
    var tombol = "Tambah Karyawan";
  } else {
    var method = "GET";
    var actionn = "";
    var value = "sss";
    var tombol = "Edit Karyawan";
  }
  const _component = useComponent("form-data-karyawan","/app/web/src/components/form-data-karyawan",{ title, actionn, method , tombol});
  return eval(_component.render)
}