import "../styles/globals.css";
import { ThemeProvider } from "../contexts/ThemeContext";

export const metadata = {
  title: "Ogankpa E. Ugonna - Portfolio",
  description: "Personal portfolio built with Next.js and Tailwind",

  // ✅ Good for SEO
  keywords: [
    "Portfolio",
    "Next.js",
    "Tailwind CSS",
    "Frontend Developer",
    "Web Developer",
    "React"
  ],
  authors: [{ name: "Ogankpa E. Ugonna", url: "https://ugonna-j6ae.vercel.app/" }],
  creator: "Ogankpa E. Ugonna",

  // ✅ Social (Open Graph / Facebook)
  openGraph: {
    title: "Ogankpa E. Ugonna - Portfolio",
    description: "Personal portfolio built with Next.js and Tailwind",
    url: "https://ugonna-j6ae.vercel.app/",
    siteName: "My Portfolio",
    images: [
      {
        url: "/og-image.png", // place this in /public
        width: 1200,
        height: 630,
        alt: "My Portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter (X) Card
  twitter: {
    card: "summary_large_image",
    title: "Ogankpa E. Ugonna - Portfolio",
    description: "Personal portfolio built with Next.js and Tailwind",
    creator: "@whopushedtoprod", // your X/Twitter handle
    images: ["/og-image.png"],
  },

  // ✅ Favicon & manifest
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
