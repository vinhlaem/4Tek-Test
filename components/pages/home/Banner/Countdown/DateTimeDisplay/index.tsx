import { Box } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import useTranslation from "next-translate/useTranslation";

interface Props {
  value: number;
  type: string;
}

const DateTimeDisplay = ({ value, type }: Props) => {
  const { t } = useTranslation();
  return (
    <Box
      bg="#fff"
      textAlign="center"
      w={{ base: "100%", md: "70px", xl: "100px" }}
    >
      <TemplateText
        txt={value}
        fontSize={{ base: "30px", xl: "60px" }}
        fontWeight={600}
      />
      <TemplateText
        txt={t(`${type}`)}
        fontWeight={600}
        fontSize={{ base: "14px", xl: "16px" }}
      />
    </Box>
  );
};

export default DateTimeDisplay;
