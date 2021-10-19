/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";

export default ({ children, title }) => {
  if (title === "Tambah Data Karyawan") {
    var method = "POST";
    var actionn = "";
  } else {
    var method = "GET";
    var actionn = "";
    var value = "sss";
  }
  const _component = useComponent("form-data-karyawan","/app/web/src/components/form-data-karyawan",{ title, actionn, method, value });
  return eval(_component.render)
}