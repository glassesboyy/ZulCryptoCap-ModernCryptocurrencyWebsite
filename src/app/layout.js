import { geistMono, geistSans } from "@/lib/fonts";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: "ZulCryptoCap | Crypto Currency Website",
  description: "A modern cryptocurrency tracking and analytics platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
        data-supresshydrationwarning="true"
      >
        {children}
      </body>
    </html>
  );
}
