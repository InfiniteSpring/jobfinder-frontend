import { Providers } from "../store/provider";
import "./globals.css";

import Header from "../components/server/Header";
import Filters from "../components/client/FiltersSection";
import Footer from "../components/server/Footer";

export const metadata = {
  title: "WorkBoard",
  description: "Поиск кратковременной работы, подработки, и клиентов для специалистов различных областей в Беларуси",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <script
        type="text/javascript"
        src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=c38b3ef4-af03-47b6-af61-60d94667f7d6"
        async
      ></script>
      <body className="overflow-x-hidden">
        <Providers>
          <Header />
          <Filters />
            <main className="mx-auto pt-[11vh] min-h-full 
              overflow-hidden bg-emptySpaceBackground">
              {children}
            </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

