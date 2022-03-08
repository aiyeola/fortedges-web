import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  cssVarPrefix: "fortedges",
};

const overrides = {
  config,
  ...foundations,
};

const theme = extendTheme(overrides);

export default theme;
