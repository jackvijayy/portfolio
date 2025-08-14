
import "./globals.css";

import { Inter } from 'next/font/google';
export const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "VijayFolio",
  description: "Welcome to VijayFolio, a portfolio showcasing my work as a frontend developer.",
  openGraph: {
    title: "VijayFolio",
    description: "Explore my frontend development projects, showcasing web development, design, and creativity.",
    image: "/images/grid1.png", // Replace with your own image URL
    url: "https://vijaydevfolio.vercel.app/", // Replace with your actual website URL
    type: "website", // The type of content (website, article, etc.)
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
