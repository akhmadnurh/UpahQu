/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";

export default ({ children, id, text, clicked }) => {
  const batal = () => {
     this.style.display = "none";
  };
  const _component = useComponent("confirm_alert","/app/web/src/components/confirm_alert",{ id, text, clicked ,batal});
  return eval(_component.render)
}