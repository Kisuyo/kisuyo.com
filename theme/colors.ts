import type { CSSProperties } from "react";

type ThemeCssVariables = CSSProperties & Record<`--${string}`, string>;

export const primaryColors = {
  50: "#fbf3f4",
  100: "#f7e7e9",
  200: "#f0cfd4",
  300: "#e2a7b3",
  400: "#cf768b",
  500: "#b94f69",
  600: "#9f354f",
  700: "#83273f",
  800: "#6d2237",
  900: "#5d1f31",
} as const;

export const primaryRgbColors = {
  50: "251, 243, 244",
  100: "247, 231, 233",
  200: "240, 207, 212",
  300: "226, 167, 179",
  400: "207, 118, 139",
  500: "185, 79, 105",
  600: "159, 53, 79",
  700: "131, 39, 63",
  800: "109, 34, 55",
  900: "93, 31, 49",
} as const;

export const primaryRgbaColors = {
  50: (alpha: number) => `rgba(${primaryRgbColors[50]}, ${alpha})`,
  100: (alpha: number) => `rgba(${primaryRgbColors[100]}, ${alpha})`,
  200: (alpha: number) => `rgba(${primaryRgbColors[200]}, ${alpha})`,
  300: (alpha: number) => `rgba(${primaryRgbColors[300]}, ${alpha})`,
  400: (alpha: number) => `rgba(${primaryRgbColors[400]}, ${alpha})`,
  500: (alpha: number) => `rgba(${primaryRgbColors[500]}, ${alpha})`,
  600: (alpha: number) => `rgba(${primaryRgbColors[600]}, ${alpha})`,
  700: (alpha: number) => `rgba(${primaryRgbColors[700]}, ${alpha})`,
  800: (alpha: number) => `rgba(${primaryRgbColors[800]}, ${alpha})`,
  900: (alpha: number) => `rgba(${primaryRgbColors[900]}, ${alpha})`,
} as const;

export const themeColors = {
  primary: primaryColors,
} as const;

export const themeRgbColors = {
  primary: primaryRgbColors,
} as const;

export const themeRgbaColors = {
  primary: primaryRgbaColors,
} as const;

export const themeCssVariables = {
  "--primary-50": primaryColors[50],
  "--primary-100": primaryColors[100],
  "--primary-200": primaryColors[200],
  "--primary-300": primaryColors[300],
  "--primary-400": primaryColors[400],
  "--primary-500": primaryColors[500],
  "--primary-600": primaryColors[600],
  "--primary-700": primaryColors[700],
  "--primary-800": primaryColors[800],
  "--primary-900": primaryColors[900],
  "--primary-rgb-50": primaryRgbColors[50],
  "--primary-rgb-100": primaryRgbColors[100],
  "--primary-rgb-200": primaryRgbColors[200],
  "--primary-rgb-300": primaryRgbColors[300],
  "--primary-rgb-400": primaryRgbColors[400],
  "--primary-rgb-500": primaryRgbColors[500],
  "--primary-rgb-600": primaryRgbColors[600],
  "--primary-rgb-700": primaryRgbColors[700],
  "--primary-rgb-800": primaryRgbColors[800],
  "--primary-rgb-900": primaryRgbColors[900],
} as const satisfies ThemeCssVariables;
