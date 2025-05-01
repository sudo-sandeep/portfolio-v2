import { roboto } from "@/fonts/font";
import "./globals.css";
import SHeader from "@/components/SHeader";
import SFooter from "@/components/SFooter";
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: "Sandeep Portfolio",
  description: "Sandeep Kumar | Portfolio | React JS | Next JS | JavaScript | Typescript | Redux | Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning style={{scrollBehavior:'smooth'}}>
      <body className={`${roboto.className} flex flex-col min-h-screen bg-offWhite`}>
        <ToastContainer/>
        <SHeader />
        <main className="pt-20 pb-4 px-4 md:px-12 lg:px-20 grow grid gap-4">{children}</main>
        <SFooter />
      </body>
    </html>
  );
}
