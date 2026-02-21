import "./styles/globals.scss";

export const metadata = {
  title: "Modern Next.js App",
  description: "A high-performance, responsive web application template",
};

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import layoutStyles from "@/components/Layout/Layout.module.scss";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={layoutStyles.main}>
        <Navbar />
        <main className={layoutStyles.content}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
