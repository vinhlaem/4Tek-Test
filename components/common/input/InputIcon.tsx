import {
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { ChakraType } from "constants/types";
import { IconType } from "react-icons";

interface SearchInputProps {
  h?: ChakraType;
  w?: ChakraType;
  type: string;
  value?: string;
  border?: ChakraType;
  borderColor?: string;
  className?: string;
  placeholder?: string;
  backgroundColor?: string;
  isFocus?: boolean;
  borderRadius?: string;
  color?: string;
  icon?: IconType;
  defaultValue?: number;
  onChange?: (value: number) => void;
  onChangeText?: (value: string) => void;
}

export default function InputIcon({
  h,
  w,
  type,
  backgroundColor,
  className,
  placeholder,
  borderColor,
  color,
  border,
  borderRadius,
  onChange,
  onChangeText,
  icon,
  defaultValue,
  ...rest
}: SearchInputProps) {
  return (
    <InputGroup w={w} h={h}>
      {type == "number" && (
        <NumberInput
          value={defaultValue}
          onChange={(e) => onChange?.(Number(e))}
          w={w}
        >
          <NumberInputField
            _focus={{ boxShadow: "none" }}
            pl="18px"
            h={h}
            border={border}
            borderColor={borderColor}
            fontSize="14px"
            value={defaultValue}
            fontWeight={500}
            color="#171924"
            className={className}
            placeholder={placeholder}
            borderRadius={borderRadius ? borderRadius : "8px"}
            {...rest}
          />
        </NumberInput>
      )}

      {type === "text" && (
        <Input
          w={w}
          h={h}
          border={border}
          borderColor={borderColor}
          type={type}
          fontSize="14px"
          value={defaultValue}
          color={color ?? "#171924"}
          className={className}
          placeholder={placeholder}
          bg={backgroundColor ?? "#F6F7F9"}
          onChange={(e) => onChangeText?.(e.target.value)}
          borderRadius={borderRadius ? borderRadius : "8px"}
          {...rest}
        />
      )}
      <InputRightElement h={h} cursor="pointer" w="50px">
        {icon && <Icon as={icon} color={color} w={3} h={3} />}
      </InputRightElement>
    </InputGroup>
  );
}
