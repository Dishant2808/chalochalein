import './styles/globals.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Script from 'next/script';
import WhatsappIcon from './components/WhatsappIcon/WhatsappIcon';
import CallNowButton from './components/CallButton/CallNowButton';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* google tag manager */}
      <Script
        id="google-tag-manager "
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T6S572ZW');
            `,
        }}
      />

      {/*  Global Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-WREE0ZHTWF`}
      />

      <Script id="google-tag" strategy="afterInteractive">
        {`
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', 'G-WREE0ZHTWF');
        `}
      </Script>

      <body>
        <meta
          name="google-site-verification"
          content="INwIwhGc1iaKYZ5krbOiw9dWLNNUZy12hRySLWJqdPk"
        />

        <noscript
          dangerouslySetInnerHTML={{
            __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T6S572ZW"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />

        <Header />
        {children}
        <Footer />
        <CallNowButton />
        <WhatsappIcon />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
      </body>
    </html>
  )
}
