export type ChakraType =
  | undefined
  | string
  | {
      base?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      "2xl"?: string;
    };
export type CoinPayType = {
  name: string;
  image: string;
  icon: string;
  value: string;
};

export type ErrorFormType = { [key: string]: { message?: string } };

export type OptionType = {
  value: string | number;
  label: string;
};

export type ErrorMsg = Error | string | string[];
