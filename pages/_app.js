import '../styles/globals.css';
import {
  ChakraProvider,
  CSSReset,
  ColorModeScript,
  // theme,
  // ThemeProvider,
  ScaleFade,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Layout from '../component/layout';
import 'react-multi-carousel/lib/styles.css';
import customTheme from '../styles/theme';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import CustomLoader from '../component/CustomLoader';
import Navbar from '../component/menu/Navbar';
import NewsLetter from '../component/NewsLetter';

function MyApp({ Component, pageProps, router }) {
  const Router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  //console.log('chakapppae', pageProps.menu);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <ChakraProvider theme={customTheme}>
        {/* <Layout> */}
        <Navbar menu={pageProps.menu} />

        <ScaleFade
          key={router.route}
          animate={{ y: 0, opacity: 1 }}
          initial={{ y: -16, opacity: 0 }}
          initialScale={0.9}
          in="true"
        >
          {/* <ColorModeScript initialColorMode="default"></ColorModeScript> */}
          <CSSReset />
          {!loading ? <Component {...pageProps} /> : <CustomLoader />}

          {/* <Component {...pageProps} /> */}
        </ScaleFade>
        <NewsLetter />
        {/* </Layout> */}
      </ChakraProvider>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const menuData = await getHeaderMenuByName(process.env.headerMenuName);

  // await getCateogryRecentPostbyName(
  //   'categoryName',
  //   process.env.home.heroSection.NAME
  // );

  return {
    props: {
      menu: menuData.menu,
    },
    revalidate: 15, //10 minutes
  };
}

export default MyApp;
