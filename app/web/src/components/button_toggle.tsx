/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";

export default ({ children, coba, index, onClick, id }) => {
  const _component = useComponent("button_toggle","/app/web/src/components/button_toggle",{ coba, index, onClick, id });
  return eval(_component.render)
}