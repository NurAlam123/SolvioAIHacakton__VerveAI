import localFont from "next/font/local";

export const rubik = localFont({
  src: [
    {
      path: "./rubik/Rubik-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
    {
      path: "./rubik/Rubik-VariableFont_wght.ttf",
      style: "normal",
    },
  ],
  variable: "--font-rubik",
  display: "swap",
  preload: false,
});
