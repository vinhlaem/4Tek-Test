import { Text, TextProps } from "@chakra-ui/react";

interface Props extends TextProps {
  txt: string | number;
}
const TemplateText = ({
  txt,
  fontSize = 14,
  fontWeight = 500,
  color,
  ...props
}: Props) => {
  return (
    <Text
      {...props}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color || "text.100"}
      dangerouslySetInnerHTML={{ __html: String(txt) }}
    />
  );
};

export default TemplateText;
