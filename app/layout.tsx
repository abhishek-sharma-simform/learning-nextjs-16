import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My App layout",
  description: "This is my app layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "red", padding: "1rem" }}>
          This is header
        </header>
        {children}
        <footer style={{ backgroundColor: "red", padding: "1rem" }}>
          This is footer
        </footer>
      </body>
    </html>
  );
}
