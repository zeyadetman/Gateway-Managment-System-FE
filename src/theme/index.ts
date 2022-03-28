import { extendTheme } from "@chakra-ui/react";
import { foundations } from "./foundations";
import components from "./components";

export const theme = extendTheme({
  fonts: {
    heading: "Patrick Hand, sans-serif",
    body: "Patrick Hand, sans-serif",
  },
  ...foundations,
  components,
});
