import { ChakraProvider } from "@chakra-ui/react";
import Layout from "components/Layout";
import Seo from "components/Seo";
import { CheckScrollProvider } from "context/CheckScroll";
import { AppProps } from "next/app";

import "../styles/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CheckScrollProvider>
      <ChakraProvider theme={theme}>
        <Seo templateTitle="Test 4Tek" description="Test 4Tek" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </CheckScrollProvider>
  );
}
// }

export default MyApp;
