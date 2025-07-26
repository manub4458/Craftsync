
import Footer from "./components/footer";
import Header from "./components/header";
import "./globals.css";
import RouteLoader from "./components/routeloader";
import ContactOverlay from './components/letstalk';



export const metadata = {
  title: "TheCraftsync - Digital Agency",
  description: "Premier digital agency providing web design, development, and 360 digital marketing services",
    icons: {
    icon: '/3dlogo3.png',
    shortcut: '/3dlogo3.png',
    apple: '/3dlogo3.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      
      >
        
      <RouteLoader />
      <ContactOverlay />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
