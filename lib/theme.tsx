import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { AppProps } from "next/app";

const styles = {
  global: (props: AppProps) => ({
    body: {
      bg: mode("#f2f2f2", "#0d0d0d")(props),
      color: mode("#0d0d0d", "#f2f2f2")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#595959",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props: AppProps) => ({
      color: mode("#3d7aed", "#ff63c3")(props),
      textUnderlineOffset: 3,
    }),
  },
  Modal: {
    baseStyle: (props: AppProps) => ({
      dialog: {
        bg: mode("light1", "dark1")(props),
      },
    }),
  },
};

const colors = {
  light: "#f2f2f2",
  dark: "#0d0d0d",
  primary: "#a6a6a6dwadawd",
  secondary: "#262626",
  medium: "#595959",
  dark1: "#1c1c1c",
  light1: "#c9c9c9",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, colors });
export default theme;
