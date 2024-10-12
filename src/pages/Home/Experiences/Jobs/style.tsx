import * as SM from "../../style";

interface LogoWrapperProps {
  children: any;
}
export const LogoWrapper = (props: LogoWrapperProps) => (
  <SM.LogoWrapper
    sx={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 2,
    }}
  >
    {props.children}
  </SM.LogoWrapper>
);
