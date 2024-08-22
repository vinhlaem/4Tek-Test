import { Flex } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { NavItem } from "constants/interface";
import useTranslation from "next-translate/useTranslation";
import { useCallback } from "react";

interface props {
  navItem: NavItem;
  onCloseMenu: () => void;
}

const MobileMenu = ({ navItem, onCloseMenu }: props) => {
  const handleClickScroll = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  const { t } = useTranslation();

  return (
    <Flex
      cursor="pointer"
      align="center"
      justifyContent="center"
      alignItems="center"
      _hover={{
        textDecoration: "none",
      }}
      p="10px 0"
      borderBottom="1px solid #EEEEEE"
      onClick={() => {
        onCloseMenu();
        handleClickScroll(navItem.href || "");
      }}
      h="100px"
    >
      <TemplateText
        w="100%"
        fontWeight={700}
        fontSize={18}
        textAlign="center"
        txt={t(`${navItem.label}`)}
      />
    </Flex>
  );
};

export default MobileMenu;
