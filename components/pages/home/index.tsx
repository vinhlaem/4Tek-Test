import { Box, Image } from "@chakra-ui/react";
import About from "components/pages/home/About";
import Banner from "components/pages/home/Banner";
import Game from "components/pages/home/Game";
import Slide from "components/pages/home/Slide";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <Box>
      {/* <TemplateText
        txt={t("common:title")}
        fontWeight={700}
        fontSize={22}
        as="h2"
        mb={{ base: "8px", md: "unset" }}
      /> */}

      <Banner />
      <Image
        src="/images/fairy-mobile.png"
        alt="fairy"
        w="500px"
        display={{ base: "block", lg: "none" }}
        position="absolute"
        bottom="0px"
        transform="translate(-50%, 0%)"
        left="50%"
      />
      <About />
      <Game />
      <Slide />
    </Box>
  );
}
