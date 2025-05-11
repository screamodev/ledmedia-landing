import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

// Font configuration
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

// SEO metadata
export const metadata: Metadata = {
  title: 'LEDMedia - Інноваційні 3D Рекламні Рішення',
  description: 'LEDMedia пропонує інноваційні 3D рекламні рішення, голографічні вентилятори та консультації. Зробіть вашу рекламу яскравою та незабутньою.',
  keywords: "Реклама, Украина, Банерная реклама, ЛедМедіа, LedMedia, краща реклма, 3Д реклама, яскрава реклама, Лучшая реклама, реклама метро, реклама торговые центры, Реклама Харьков, реклама Киев, Одесса, Львов 3Д реклама, Банерна реклама, Реклама метро, торгові центри, Реклама в Україні, голографічні вентилятори",
  robots: "index, follow",
  metadataBase: new URL('https://ledmedia.example.com'),
  openGraph: {
    title: "LEDMedia - Інноваційні 3D Рекламні Рішення",
    description: 'LEDMedia пропонує інноваційні 3D рекламні рішення, голографічні вентилятори та консультації. Зробіть вашу рекламу яскравою та незабутньою.',
    url: "https://ledmedia.example.com",
    siteName: "LEDMedia",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LEDMedia 3D Advertising Solutions",
      }
    ],
    locale: "uk_UA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
