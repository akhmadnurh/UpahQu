/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";



export default ({ children }) => {
  const logout = () => {
    window.user = {};
    navigate('/login')
  }

  const dashboard = () => {
    navigate('/dashboard')
  }

  const dataKaryawan = () => {
    navigate('/data-karyawan')
  }
  
  const _component = useComponent("sidebar","/app/web/src/components/sidebar",{logout, dashboard, dataKaryawan});
  return eval(_component.render)
}