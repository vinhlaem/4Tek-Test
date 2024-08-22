import { Box, Flex, useDisclosure } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { NavItem } from "constants/interface";
import useTranslation from "next-translate/useTranslation";
import React, { useCallback } from "react";

interface props {
  navItem: NavItem;
}

const Menu = ({ navItem }: props) => {
  const menu = useDisclosure();

  const handleClickScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const { t } = useTranslation();

  return (
    <Flex
      onClick={() => {
        menu.onOpen();
      }}
      alignItems="center"
      gap="40px"
    >
      <Box
        onClick={() => handleClickScroll(navItem.href || "")}
        p="0px 10px"
        w="100%"
        cursor="pointer"
      >
        <TemplateText
          _hover={{ opacity: 0.5 }}
          fontWeight={600}
          fontSize={14}
          txt={t(`${navItem.label}`)}
          color="#E5E5E5"
        />
      </Box>
    </Flex>
  );
};

export default Menu;
