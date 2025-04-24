import { geistMono, geistSans } from "@/lib/fonts";
import "./globals.css";

export const metadata = {
  title: "ZulCryptoCap | Crypto Currency Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
