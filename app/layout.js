import Header from "@/app/_components/Header";

import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description: "Luxurious cabin hotel, loacted in the heart of the Itailan Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${josefin.className} antialiased flex flex-col min-h-screen text-primary-100 bg-primary-950 relative`}>
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl w-full  mx-auto">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
