import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../component/layout';
import 'react-multi-carousel/lib/styles.css';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp
