/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";

export default ({ children }) => {
  const _component = useComponent("button_toggle","/app/web/src/components/button_toggle",{});
  return eval(_component.render)
}