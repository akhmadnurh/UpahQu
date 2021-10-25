/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";
import { api } from "web.utils/src/api";

export default ({ children, title }) => {
  let meta = {
    data: '',
    action: {}
  }
  // get data
  api('/api/r-departemen').then(res => {
    meta.data = res.departemen
  })

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
  const _component = useComponent("form-data-karyawan","/app/web/src/components/form-data-karyawan",{ title, actionn, method, tombol, meta });
  return eval(_component.render)
}