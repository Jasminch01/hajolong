import type { Metadata } from "next";
import { Alegreya, Alegreya_Sans } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionRoot from "@/components/MotionRoot";
import SmoothScroll from "@/components/SmoothScroll";
import MotionProvider from "@/components/MotionProvider";

const display = Alegreya({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-alegreya",
  display: "swap",
});

const sans = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-alegreya-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hajolong Solutions | Agentic AI and custom software",
  description:
    "Hajolong Solutions builds AI agents on Google and Amazon models, fine-tuned to your data, and the web platforms around them. A senior team from the Chittagong Hill Tracts.",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var t=localStorage.getItem("hajolong-theme");if(t==="dark"||t==="light"){d.setAttribute("data-theme",t);}else if(window.matchMedia("(prefers-color-scheme: dark)").matches){d.setAttribute("data-theme","dark");}if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){d.classList.add("js-motion");}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <MotionProvider>
          <TooltipProvider delayDuration={200}>
            <MotionRoot />
            <SmoothScroll />
            <Navbar />
            <main className="flex-1 w-full">{children}</main>
            <Footer />
            <div className="grain" aria-hidden="true" />
          </TooltipProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
