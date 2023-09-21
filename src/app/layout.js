import "./globals.css";

import { yekan } from "@/utils/fonts";
import Layout from "@/layout/Layout";
import NextAuthProvider from "@/providers/NextAuthProvider";

export const metadata = {
  title: "املاک بالو",
  description: "خرید و فروش املاک",
  icons: {icon: "./favicon.ico"}
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekan.className} max-w-6xl mx-auto px-4`}>
        <NextAuthProvider>
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
