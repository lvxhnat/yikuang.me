import * as SM from "../../style";

interface LogoWrapperProps {
  children: any;
  style?: any;
}
export const LogoWrapper = (props: LogoWrapperProps) => (
  <SM.LogoWrapper style={props.style}>{props.children}</SM.LogoWrapper>
);
