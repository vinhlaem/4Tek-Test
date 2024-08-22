import { Box, Flex, Image } from "@chakra-ui/react";
import PopoverItem from "components/common/PopoverItem";
import ArrowBottomMenu from "components/common/svg/ArrowBottomMenu";
import ChooseItemIcon from "components/common/svg/ChooseItemIcon";
import TemplateText from "components/common/Text/TemplateText";
import useVisible from "hooks/useVisible";
import { useRouter } from "next/router";
import React, { useMemo, useRef, useState } from "react";

interface Props {
  lang?: string;
  setLang?: (value: string) => void;
  isMobile?: boolean;
}

export default function SelectLanguage({ lang, setLang, isMobile }: Props) {
  const LANGUAGES = useMemo(
    () => [
      {
        name: "Vietnamese",
        locale: "vi",
        lang: "VI",
        flat: "/images/flats/vietnam.png",
      },
      {
        name: "English",
        locale: "en",
        lang: "EN",
        flat: "/images/flats/united-states.png",
      },
    ],
    []
  );
  const isOpenLanguages = useVisible();

  const boxSelectFont = useRef(null);

  // useOutsideClick({
  //   ref: boxSelectFont,
  //   handler: () => {
  //     setIsSelected(false);
  //     isOpenLanguages.hide();
  //   },
  // });
  const LAGUAGE = useMemo(
    () => LANGUAGES.find((item) => item.lang === lang),
    [LANGUAGES, lang]
  );

  const [isSelected, setIsSelected] = useState(false);

  const router = useRouter();

  return (
    <PopoverItem
      isSelect={isSelected}
      buttonItem={
        <Flex
          cursor="pointer"
          alignItems="center"
          justifyContent={isMobile ? "center" : "space-between"}
          borderRadius="6px"
          p={isMobile ? "unset" : "5px 10px"}
          onClick={() => {
            isOpenLanguages.show();
            setIsSelected(false);
          }}
          gap="10px"
          bg={isMobile ? "#F6F6F6" : "unset"}
          h={isMobile ? "40px" : "unset"}
          w={isMobile ? "80px" : "unset"}
          border={isMobile ? "1px solid #AFAFAF" : "unset"}
        >
          <Image src={LAGUAGE?.flat} alt={LAGUAGE?.name} w="40px" h="40px" />

          <Box
            transform={
              isOpenLanguages.visible ? "rotate(180deg)" : "rotate(0deg)"
            }
            transition="all .25 ease-in-out"
          >
            <ArrowBottomMenu
              color={isMobile ? "#000" : "#fff"}
              w="15px"
              h="15px"
            />
          </Box>
        </Flex>
      }
      w="auto"
      bg="bg.300"
      border="none"
      mt="-5px"
      mr="100px"
    >
      <Box
        borderRadius="20px"
        w="max-content"
        bg="#fff"
        ref={boxSelectFont}
        p="0px 7px"
      >
        {LANGUAGES.map((item, index) => (
          <Flex
            cursor="pointer"
            key={item.name}
            alignItems="center"
            gap="10px"
            p={{ base: "10px 14px", xl: "12px 0px" }}
            borderBottom={
              index === LANGUAGES.length - 1 ? "unset" : "1px solid #000"
            }
            onClick={() => {
              setLang?.(item?.lang || "");
              router.push(router.asPath, router.asPath, {
                locale: item?.locale,
              });
              isOpenLanguages.hide();
              setIsSelected(true);
            }}
          >
            {item.locale === LAGUAGE?.locale ? (
              <ChooseItemIcon />
            ) : (
              <Box w="16px" h="16px" />
            )}

            <Flex alignItems="center" gap="5px">
              <Image src={item?.flat} alt={item?.name} w="40px" h="40px" />{" "}
              <TemplateText
                fontWeight={600}
                fontSize={14}
                txt={item?.name || ""}
              />
            </Flex>
          </Flex>
        ))}
      </Box>
    </PopoverItem>
  );
}
