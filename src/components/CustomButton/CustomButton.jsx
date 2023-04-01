import { forwardRef} from "react";

export const CustomButton = forwardRef((props, ref) => (
  <button ref={ref}>{props.children}</button>
));