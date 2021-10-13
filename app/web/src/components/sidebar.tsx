/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";



export default ({ children }) => {
  const logout = () => {
    window.user = {};
    navigate('/login')
  }

  const dashboard = () => {
    navigate('/admin/dashboard')
  }

  const dataKaryawan = () => {
    navigate('/admin/data-karyawan')
  }
  
  const _component = useComponent("sidebar","/app/web/src/components/sidebar",{logout, dashboard, dataKaryawan});
  return eval(_component.render)
}