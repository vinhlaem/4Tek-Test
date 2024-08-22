import { Box, Flex, Image } from "@chakra-ui/react";
import InputIcon from "components/common/input/InputIcon";
import ArrowBottomMenu from "components/common/svg/ArrowBottomMenu";
import TemplateText from "components/common/Text/TemplateText";
import CountDown from "components/pages/home/Banner/Countdown";
import { CheckScrollContext } from "context/CheckScroll";
import useCountDown from "hooks/useCountDown";
import useTranslation from "next-translate/useTranslation";
import React, { useContext, useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Banner() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  const [targetDate] = useState(new Date(dateTimeAfterThreeDays));
  const [days, hours, minutes, seconds] = useCountDown(targetDate);

  const { t } = useTranslation();

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
    <Flex
      justifyContent={{ base: "start", xl: "center" }}
      alignItems="center"
      className="background-banner"
      position="relative"
      direction="column"
      p={{ base: "0 16px" }}
      id="#banner"
      scrollMarginTop={{ base: "200px", lg: "unset" }}
    >
      <Image
        src="/images/fairy.png"
        alt="fairy"
        w="938px"
        position="absolute"
        bottom="0px"
        left="0px"
        zIndex={1}
        display={{ base: "none", lg: "block" }}
      />

      <Flex
        justifyContent="center"
        alignItems="center"
        w="40px"
        h="40px"
        borderRadius="50px"
        position="fixed"
        right="50px"
        bottom="50px"
        bg="#fff"
        boxShadow=" rgba(0, 0, 0, 0.1) 0px 8px 14px"
        onClick={() => window.scrollTo(0, 0)}
      >
        <Box
          transform={isScroll ? "rotate(180deg)" : "rotate(0deg)"}
          transition="all .25 ease-in-out"
        >
          <ArrowBottomMenu color="#000" w="15px" h="15px" />
        </Box>
      </Flex>

      <Flex
        direction="column"
        alignItems="center"
        mt={{ base: "250px", xl: "unset" }}
        justifyContent={{ base: "start", xl: "center" }}
        gap={{ base: "30px", xl: "100px" }}
        position="relative"
        zIndex={2}
      >
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="20px"
        >
          <TemplateText
            txt={t("common:banner.title")}
            fontSize={{ base: "40px", xl: "80px" }}
            fontWeight={700}
            textAlign="center"
            color="#fff"
          />
          <CountDown
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
        </Flex>
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap="20px"
        >
          <TemplateText
            txt={t("common:banner.content")}
            fontSize="16px"
            maxW="400px"
            fontWeight={400}
            textAlign="center"
            color="#fff"
          />
          <InputIcon
            type="text"
            color="#000"
            backgroundColor="#fff"
            h="56px"
            border="1px solid #fff"
            placeholder={t("common:banner.placeholder")}
            icon={BsArrowRight}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
