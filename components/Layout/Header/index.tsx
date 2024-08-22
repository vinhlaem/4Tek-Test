import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Flex, Image, Link, Stack, useDisclosure } from "@chakra-ui/react";
import DrawerItem from "components/common/DrawerItem";
import SelectLanguage from "components/Layout/Header/SelectLanguages";
import NAV_ITEMS from "config/header";
import { useLanguage } from "hooks/language";

import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

interface props {
  onCloseMenu: () => void;
}

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const { lang, setLang } = useLanguage();

  const DesktopNav = () => {
    return (
      <Stack direction="row" spacing={4} className="stack-header">
        {NAV_ITEMS.map((navItem, k) => {
          return (
            <Box key={Number(k)}>
              <Menu navItem={navItem} />
            </Box>
          );
        })}
      </Stack>
    );
  };
  const MobileNav = ({ onCloseMenu }: props) => {
    return (
      <Box>
        <Stack p="4px 24px 0 24px" display={{ xl: "none" }} bg="bg.100">
          {NAV_ITEMS.map((navItem, k) => (
            <MobileMenu onCloseMenu={onCloseMenu} key={k} navItem={navItem} />
          ))}
        </Stack>
      </Box>
    );
  };

  return (
    <Box className="maxW">
      <Flex
        borderStyle="solid"
        justifyContent="space-between"
        alignItems="center"
        p={{ base: "10px", xl: "15px 25px" }}
      >
        <Link href="/">
          <Image src="/logo.png" w="100px" alt="logo" h="100%" />
        </Link>
        <Flex display={{ base: "none", xl: "flex" }} alignItems="center">
          <DesktopNav />

          <SelectLanguage lang={lang} setLang={setLang} />
        </Flex>

        <Box
          w="40px"
          h="46px"
          cursor="pointer"
          borderRadius="4px"
          alignItems="center"
          justifyContent="center"
          display={{ base: "flex", xl: "none" }}
          onClick={() => {
            onToggle();
          }}
        >
          {isOpen ? (
            <CloseIcon color="#fff" w={3} h={3} />
          ) : (
            <HamburgerIcon w={9} h={9} color="#fff" />
          )}
        </Box>
      </Flex>

      <DrawerItem
        lang={lang}
        setLang={setLang}
        pbody="0px"
        onClose={onClose}
        isOpen={isOpen}
      >
        <Box mt="10px">
          <MobileNav onCloseMenu={onClose} />
        </Box>
      </DrawerItem>
    </Box>
  );
};

export default Header;
