import StyledComponentsRegistry from "@/lib/registry";
import "./globals.css";

export const metadata = {
  title: "Yssra Chahine | Junior Frontend Developer",
  description:
    "Portfolio von Yssra Chahine - Junior Frontend Developer mit Fokus auf React, Next.js, JavaScript und moderne Webentwicklung.",
  keywords: [
    "Yssra Chahine",
    "Junior Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Frontend Developer Hamburg",
    "Remote Frontend Developer",
  ],
  authors: [{ name: "Yssra Chahine" }],
  creator: "Yssra Chahine",
  openGraph: {
    title: "Yssra Chahine | Junior Frontend Developer",
    description:
      "Portfolio von Yssra Chahine — React, Next.js, JavaScript und moderne Webentwicklung.",
    type: "website",
    locale: "de_DE",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
