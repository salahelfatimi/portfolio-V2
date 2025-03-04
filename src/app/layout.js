import "./globals.css";
import localFont from 'next/font/local'
import { Fredoka } from "next/font/google";
const myFont = localFont({ 
  src: '/fonts/Goodly-Bold.ttf',
  variable: "--Goodly-Bold-sans",
  weight: "100 900",
 })
const fredoka = Fredoka({ subsets: ["hebrew"] });
export const metadata = {
  title: "Salaheddine Elfatimi | Full Stack Developer & Web Marketer",
  description: "Salaheddine Elfatimi is a Full Stack Developer & Web Marketer specializing in web development, SEO, and digital marketing strategies .",
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`,),
  keywords: ["Full Stack Developer", "Web Marketer", "Frontend Development", "Backend Development", "Web Development", "Digital Marketing", "SEO Specialist", "React Developer", "Next.js Developer", "Tailwind CSS", "JavaScript", "Node.js", "Freelance Developer", "Remote Developer", "Website Optimization", "Custom Web Solutions", "Responsive Design", "API Integration", "E-commerce Development", "Web Marketing Strategies", "Content Creation", "UI/UX Design", "Google Ads", "Facebook Ads"],
  alternates: {
    canonical: "/",

    
  },
  openGraph: {
    title: "Salaheddine Elfatimi | Full Stack Developer & Web Marketer",
    description: "Salaheddine Elfatimi is a Full Stack Developer & Web Marketer specializing in web development, SEO, and digital marketing strategies .",
    url:`${process.env.NEXT_PUBLIC_BASE_URL}`,
    robots: {
      index: true,
      follow: true,
    },
    siteName: "Salaheddine Elfatimi",
    images: [
      {
        url: `/opengraph-image.jpg`,
        secureUrl: `/opengraph-image.jpg`,
        width: 1200,
        height: 630,
        alt: `Salaheddine Elfatimi`,
      }
    ],
    type: "website",
   
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${myFont.className}  scroll-smooth  bg-bg scrollbar scrollbar-thumb-primary scrollbar-track-bg h-32 overflow-y-scroll `}>
        {children}
      </body>
    </html>
  );
}
