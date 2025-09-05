import { ReactNode } from "react";
import "./styles/global.scss";
import "./styles/variables.scss";
import "./styles/desktop.scss";

import { Roboto, Teko } from "next/font/google";

export const metadata = {
  title: "Justin Lyons",
  description: "Justin Lyons | 3 Month Body Transformation",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-roboto",
});

const teko = Teko({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-teko",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${teko.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
