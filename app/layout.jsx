import Navbar from "/components/Nav";
import { Poppins } from "next/font/google";
import "/styles/globals.css";

const poppins_font = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Gitify",
  description: "Simple Github client for regular browsing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins_font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
