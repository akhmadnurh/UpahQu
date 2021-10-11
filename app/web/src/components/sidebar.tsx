/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";



export default ({ children }) => {
  const logout = () => {
    window.user = {};
    navigate('/login')
  }
  const _component = useComponent("sidebar","/app/web/src/components/sidebar",{logout});
  return eval(_component.render)
}