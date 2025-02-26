import { Providers } from "../store/provider";
import "./globals.css";

import Header from "../components/server/Header";
import Filters from "../components/client/Filters";
import Footer from "../components/server/Footer";

export const metadata = {
  title: "Offline freelance",
  description: "Find short-term jobs and customers easily",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <Providers>
          <Header />
          <Filters />
            <main className="mx-auto pt-32 min-h-full 
              overflow-hidden bg-emptySpaceBackground">
              {children}
            </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

