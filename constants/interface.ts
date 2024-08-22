export interface NavItem {
  label: string;
  href?: string;
}

export interface SubItem {
  label?: string;
  value?: string;
  nextpage?: boolean;
  href?: string;
}

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
