import "./globals.css";
import AppProviders from "./AppProviders";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <AppProviders>
        <body>{children}</body>
      </AppProviders>
    </html>
  );
}
