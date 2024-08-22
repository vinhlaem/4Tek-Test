import { Box, Flex, Image } from "@chakra-ui/react";
import InputIcon from "components/common/input/InputIcon";
import TemplateText from "components/common/Text/TemplateText";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Footer() {
  const LISTICON = [
    "/icons/ant-design_facebook-filled.png",
    "/icons/ant-design_linkedin-filled.png",
    "/icons/ant-design_twitter-outlined.png",
  ];
  const { t } = useTranslation();

  const ADDRESS = [
    {
      icon: "/images/location.png",
      address: `${t("common:footer.address.address1")} </br></br> ${t(
        "common:footer.address.address2"
      )}`,
    },
    {
      icon: "/images/mobile.png",
      address: `${t("common:footer.address.phone")}`,
    },
  ];

  return (
    <Box>
      <Box
        className="background-footer"
        p={{ base: "40px 10px", xl: "30px 70px" }}
      >
        <Flex
          direction={{ base: "column", lg: "row" }}
          alignItems="center"
          h="100%"
          justifyContent="space-between"
        >
          <Flex
            w={{ base: "100%", lg: "30%", xl: "50%" }}
            direction="column"
            alignItems={{ base: "center", lg: "start" }}
            gap="20px"
          >
            <Link href="/">
              <Image src="/logo.png" w="100px" alt="logo" />
            </Link>
            <Flex alignItems="center" gap="15px">
              {LISTICON.map((icon) => (
                <Image key={icon} src={icon} alt="icon" w="30px" h="30px" />
              ))}
            </Flex>
          </Flex>

          <Flex
            w={{ base: "100%", lg: "70%", xl: "50%" }}
            gap="20px"
            direction={{ base: "column", md: "row" }}
          >
            <Flex direction="column" gap="20px" w={{ base: "100%", lg: "50%" }}>
              <TemplateText
                txt={t("common:footer.address.address")}
                color="#fff"
                fontSize="24px"
              />
              {ADDRESS.map((add, index) => (
                <Flex
                  gap="10px"
                  key={add.icon}
                  alignItems={index == ADDRESS.length - 1 ? "center" : "start"}
                >
                  <Image src={add.icon} alt={add.icon} w="40px" h="40px" />
                  <TemplateText
                    txt={add.address}
                    fontSize="14px"
                    fontWeight={400}
                    color="#fff"
                  />
                </Flex>
              ))}
            </Flex>
            <Flex direction="column" gap="20px" w={{ base: "100%", lg: "50%" }}>
              <TemplateText
                txt={t("common:footer.subscribe.subscribe")}
                color="#fff"
                fontSize="24px"
              />
              <Flex direction="column" gap="20px">
                <TemplateText
                  txt={t("common:footer.subscribe.content")}
                  fontSize="14px"
                  fontWeight={400}
                  color="#fff"
                />
                <InputIcon
                  type="text"
                  color="#fff"
                  backgroundColor="transparent"
                  h="56px"
                  border="1px solid #fff"
                  placeholder="Email"
                  icon={BsArrowRight}
                />
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      <Flex
        bg="#000"
        h="60px"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <TemplateText
          txt="2017 Copyright. Policy."
          color="#fff"
          fontSize="18px"
        />
      </Flex>
    </Box>
  );
}
