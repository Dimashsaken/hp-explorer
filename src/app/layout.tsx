import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { QueryClientProvider } from "@/components/QueryClientProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harry Potter Explorer",
  description: "Explore the magical world of Harry Potter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="fantasy" className="min-h-screen">
      <body className={`${inter.className} min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white`}>
        <QueryClientProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="container mx-auto px-4 py-8 flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
