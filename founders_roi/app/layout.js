import { Outfit, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

// ✅ Fonts (Optimized)
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

// ✅ SEO Metadata
export const metadata = {
  metadataBase: new URL("https://www.foundersroi.com"),

  title: {
    default: "Founders ROI | Business Consulting & Digital Growth Agency",
    template: "%s | Founders ROI",
  },

  description:
    "Founders ROI helps startups and businesses grow with business consulting, digital transformation, software development, and lead generation services across India.",

  keywords: [
    "business consulting services",
    "digital transformation services",
    "sales consulting services",
    "software development company",
    "mobile app development company",
    "custom application development",
    "business growth solutions",
    "lead generation services",
    "B2B consulting services",
    "business consulting company in Tamil Nadu",
    "software development company in Chennai",
    "mobile app development company in Karur",
    "sales consulting services in India",
    "startup consulting services in Tamil Nadu",
    "custom software company in South India",
  ],

  openGraph: {
    title: "Founders ROI",
    description: "Scale your business with strategy, technology, and marketing.",
    url: "https://www.foundersroi.com",
    siteName: "Founders ROI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Founders ROI",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Founders ROI",
    description: "Business consulting, SaaS solutions, and growth strategies.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.foundersroi.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      {/* FIX: Bind font variables directly to the body to clear preload warnings */}
      <body className={`${outfit.variable} ${sora.variable} min-h-full bg-bg-primary text-white`}>
        <Navbar />
        {children}
        <Footer />

        {/* ✅ Structured Data (SEO Boost) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Founders ROI",
              url: "https://www.foundersroi.com",
              logo: "https://www.foundersroi.com/logo.png",
            }),
          }}
        />
      </body>
    </html>
  );
}