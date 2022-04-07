import '../styles/globals.css';
import {
  ChakraProvider,
  CSSReset,
  ColorModeScript,
  // theme,
  // ThemeProvider,
  ScaleFade,
} from '@chakra-ui/react';
import Layout from '../component/layout';
import 'react-multi-carousel/lib/styles.css';
import customTheme from '../styles/theme';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <ChakraProvider theme={customTheme}>
        <Layout>
          <ScaleFade
            key={router.route}
            // animate={{ y: 0, opacity: 1 }}
            // initial={{ y: -16, opacity: 0 }}
            initialScale={0.9}
            in="true"
          >
            {/* <ColorModeScript initialColorMode="default"></ColorModeScript> */}
            <CSSReset />
            <Component {...pageProps} />
          </ScaleFade>
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
