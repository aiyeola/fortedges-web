import { extendTheme } from "@chakra-ui/react";
import foundation from "./foundations";

const overrides = {
  ...foundation,
};

const theme = extendTheme(overrides);

export default theme;
