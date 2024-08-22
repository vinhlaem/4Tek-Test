import { Box, Flex, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function About() {
  const INFOMATION = [
    {
      icon: "/icons/calendar-tick.png",
      title: "common:about.info.access",
      content: "common:about.info.contentaccess",
    },
    {
      icon: "/icons/pen-tool-2.png",
      title: "common:about.info.design",
      content: "common:about.info.contentdesign",
    },
    {
      icon: "/icons/people.png",
      title: "common:about.info.team",
      content: "common:about.info.contentteam",
    },
  ];
  const { t } = useTranslation();
  return (
    <Box>
      <Flex
        direction={{ base: "column", xl: "row" }}
        className="maxW"
        gap={{ base: "30px", xl: "100px" }}
        p={{ base: "unset", xl: "50px 25px" }}
        mt={{ base: "-130px", xl: "unset" }}
        id="#about"
        scrollMarginTop={{ base: "350px", lg: "100px" }}
      >
        <Flex
          direction="column"
          w={{ base: "100%", xl: "50%" }}
          p={{ base: "20px 16px", xl: "unset" }}
        >
          <Flex direction="column" gap="20px">
            <TemplateText
              txt={t("common:about.title")}
              fontSize={{ base: "60px", xl: "80px" }}
              fontWeight={700}
            />
            <TemplateText
              txt={t("common:about.content")}
              fontSize="14px"
              fontWeight={400}
            />
          </Flex>
          <Flex
            direction={{ base: "row", xl: "column" }}
            gap={{ base: "20px", xl: "0px" }}
          >
            <Box>
              <TemplateText
                txt={`<span class="text-mobile" style="font-weight: 700; font-size: 80px ">600</span>M<span class="text-mobile" style="font-weight: 700; font-size: 80px">+</span>`}
                fontSize="30px"
                fontWeight={700}
                color="#16a1ee"
              />
              <TemplateText
                txt={t("common:about.user")}
                fontSize="20px"
                fontWeight={600}
              />
            </Box>
            <Box>
              <TemplateText
                txt={`<span class="text-mobile" style="font-weight: 700; font-size: 80px ">135+</span>`}
                fontSize="30px"
                fontWeight={700}
                color="#16a1ee"
              />
              <TemplateText
                txt={t("common:about.game")}
                fontSize="20px"
                fontWeight={600}
              />
            </Box>
          </Flex>
        </Flex>
        <Flex
          direction="column"
          w={{ base: "100%", xl: "50%" }}
          justifyContent="center"
          gap="30px"
          bg="#EEEEEE"
          p={{ base: "70px 16px", xl: "70px" }}
        >
          {INFOMATION.map((info) => (
            <Flex key={info.title} gap="10px" flexWrap="nowrap">
              <Box>
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  bg="#e3fcff"
                  w="50px"
                  h="50px"
                  borderRadius="50px"
                >
                  <Image src={info.icon} w="24px" h="24px" alt={info.title} />
                </Flex>
              </Box>
              <Box>
                <TemplateText
                  txt={t(`${info.title}`)}
                  color="#000"
                  fontWeight={700}
                  fontSize="24px"
                />
                <TemplateText
                  txt={t(`${info.content}`)}
                  fontWeight={400}
                  fontSize="14px"
                />
              </Box>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Box
        p={{ base: "200px 0px 50px 0px", lg: "400px 0px 50px 0px" }}
        position="relative"
      >
        <Image src="/images/pin-map.png" alt="map" w="100%" />
        <Image
          src="/images/illustrator.png"
          alt="illustrator"
          className="process"
          position="absolute"
          top={{ base: "40%", lg: "0%" }}
          left="20%"
          transform="translate(-50%, -50%)"
          w="50%"
        />
      </Box>
    </Box>
  );
}
