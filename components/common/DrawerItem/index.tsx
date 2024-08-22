import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Image,
} from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import SelectLanguage from "components/Layout/Header/SelectLanguages";
import { ReactNode } from "react";

import FlexBox from "../FlexBox";

interface Props {
  onClose: () => void;
  onCloseRightSideBar?: () => void;
  isOpen: boolean;
  txt?: string;
  children?: ReactNode;
  mb?: string;
  pbody?: string;
  mt?: string;
  logo?: string;
  lang?: string;
  setLang?: (value: string) => void;
}

export default function DrawerItem({
  onClose,
  onCloseRightSideBar,
  isOpen = false,
  txt,
  children,
  mb,
  pbody,
  mt,
  lang,
  setLang,
  logo,
}: Props) {
  return (
    <Drawer placement="top" onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay zIndex={20} />
      <DrawerContent zIndex={20} p="18px 0" bg="bg.100">
        <DrawerBody zIndex={20} mt={mt} p={pbody}>
          <FlexBox
            justifyContent="space-between"
            p="0 0 0 24px"
            alignItems="center"
            mb={mb}
          >
            <DrawerCloseButton
              zIndex={10}
              m="10px 8px 0 0"
              onClick={onCloseRightSideBar}
              _focusVisible={{ boxShadow: "none !important" }}
            >
              <CloseButton color="text.100" />
            </DrawerCloseButton>
            {txt && <TemplateText txt={txt} fontSize={20} fontWeight={700} />}
            {logo && <Image src={logo} w="200px" h="100%" alt={logo} />}
            {lang && <SelectLanguage lang={lang} setLang={setLang} isMobile />}
          </FlexBox>
          {children}
        </DrawerBody>
        1
      </DrawerContent>
    </Drawer>
  );
}
