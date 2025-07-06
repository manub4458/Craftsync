
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";



export const metadata = {
  title: "TheCraftsync - Digital Agency",
  description: "Premier digital agency providing web design, development, and digital marketing services",
    icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
