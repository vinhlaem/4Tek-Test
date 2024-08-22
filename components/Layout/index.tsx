import { Box } from "@chakra-ui/react";
import Footer from "components/Layout/Footer";
import Header from "components/Layout/Header";
import { CheckScrollContext } from "context/CheckScroll";
import { useContext, useEffect } from "react";

const Layout = ({ children }: { children: JSX.Element }) => {
  const { isScroll, setIsScroll } = useContext(CheckScrollContext);

  useEffect(() => {
    window.onscroll = function () {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos <= 500) {
        setIsScroll(false);
      } else {
        setIsScroll(true);
      }
    };
  }, [setIsScroll]);
  return (
    <Box bg="white">
      <Box
        position="fixed"
        top="0px"
        left="0px"
        zIndex={999}
        right="0px"
        bg={isScroll ? "#000000d1" : "transparent"}
      >
        <Header />
      </Box>

      <Box>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Layout;
