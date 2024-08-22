import { Button, ButtonProps, Flex } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import { ChakraType } from "constants/types";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  fsText?: ChakraType;
  fwText?: number;
  content: string | undefined;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  colorText?: string;
  nameCoin?: string;
  mtText?: string;
}
export default function ButtonBase({
  content = "",
  fsText,
  fwText,
  iconLeft,
  iconRight,
  colorText,
  nameCoin,
  mtText,
  ...props
}: Props) {
  return (
    <Button _hover={{}} _active={{}} {...props} alignItems="center">
      <Flex alignItems="center" justifyContent="center">
        {iconLeft}
        <TemplateText
          ml={iconLeft ? "8px" : "unset"}
          mr={iconRight ? "8px" : "unset"}
          txt={content}
          fontSize={fsText}
          fontWeight={fwText}
          color={colorText}
          mt={mtText}
        />
        {iconRight}
        {nameCoin && (
          <TemplateText
            txt={nameCoin}
            fontSize={fsText}
            fontWeight={fwText}
            color={colorText}
            ml="8px"
          />
        )}
      </Flex>
    </Button>
  );
}
