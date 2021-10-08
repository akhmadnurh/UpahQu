/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useComponent } from "web.utils/component";

export default ({ children }) => {
const _component = useComponent("modal-input","/app/web/src/components/modal-input",{});
return eval(_component.render);
}