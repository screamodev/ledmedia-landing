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
  title: 'LEDMedia - LED Рішення для Будь-якого Простору',
  description: 'LEDMedia пропонує індивідуальні LED рішення для реклами, заходів та інших локацій. Перетворіть свій простір за допомогою сучасних LED-технологій.',
  keywords: "LED screens, digital signage, outdoor advertising, LED displays, video walls",
  robots: "index, follow",
  metadataBase: new URL('https://ledmedia.example.com'),
  openGraph: {
    title: "LEDMedia - LED Рішення для Будь-якого Простору",
    description: 'LEDMedia пропонує індивідуальні LED рішення для реклами, заходів та інших локацій. Перетворіть свій простір за допомогою сучасних LED-технологій.',
    url: "https://ledmedia.example.com",
    siteName: "LEDMedia",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LEDMedia LED Solutions",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
