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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TTN39698');
            `,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TTN39698"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <RouteLoader />
        <ContactOverlay />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
