import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  text: {
    100: "#000",
    200: "#7C7C7E",
    300: "#d6d5e1",
    400: "#b7becb",
    500: "#eff3fb",
    600: "#737373",
  },
  black: {
    100: "#505052",
  },
  red: {
    100: "#F94243",
    200: "#E53A35",
  },
  green: {
    100: "#5CFEA7",
    200: "#009A51",
  },
  gray: {
    100: "#777E90",
    200: "#E5E5E5",
    300: "#9B9B9E",
    400: "#252A3F",
    500: "#7C7C7E",
  },
  white: {
    100: "#FFFF",
  },
  bg: {
    100: "#fff",
    200: "#162239",
    300: "#273550",
    500: "#0B132E",
    600: "#F6F7F9",
    700: "#EFF0F2",
  },
  blue: {
    100: "#5546ff",
    200: "#116CFF",
    300: "#116BFF",
    400: "#116CFF",
    500: "#008FFF",
  },
  blueWhite: {
    100: "#008FFF",
    200: "#E2F2FF",
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
