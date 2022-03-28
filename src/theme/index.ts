import { extendTheme } from "@chakra-ui/react";
import { foundations } from "./foundations";

export const theme = extendTheme({
  fonts: {
    heading: "Patrick Hand, sans-serif",
    body: "Patrick Hand, sans-serif",
  },
  ...foundations,
});
