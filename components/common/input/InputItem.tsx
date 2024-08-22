/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Textarea,
} from "@chakra-ui/react";
import TickPass from "components/svg/TickPass";
import { InputType } from "constants/enum";
import { ChakraType, ErrorFormType, OptionType } from "constants/types";
import { useCallback, useState } from "react";
import { Controller, FieldValues } from "react-hook-form";

import Hiden from "./icon/Hiden";
import Show from "./icon/Show";
import TemplateText from "../Text/TemplateText";

interface TextInputProps {
  type: string;
  control: any;
  name: string;
  label?: string;
  errors?: ErrorFormType;
  placeholder?: string;
  disabled?: boolean;
  labelClassName?: string;
  className?: string;
  defaultValue?: string;
  options?: Array<OptionType>;
  colorLabel?: string;
  bg?: ChakraType;
  border?: string;
  borderColor?: string;
  isRequired?: boolean;
  optionsErrorsPass?: Array<OptionType>;
  placeholderColor?: string;
}

export default function InputItem({
  type = "text",
  label,
  placeholder,
  defaultValue,
  name,
  control,
  errors,
  border,
  borderColor,
  options = [],
  optionsErrorsPass = [],
  placeholderColor,
  bg,
  isRequired = false,
}: TextInputProps) {
  const [show, setShow] = useState(false);
  const [isPass] = useState(type === "password");

  const renderType = useCallback(() => {
    if (isPass) return show ? "text" : "password";
    return type;
  }, [isPass, show, type]);

  const renderInput = (field: FieldValues) => {
    switch (type) {
      case InputType.Select:
        return (
          <Select {...field} h="48px">
            {options.map((item) => (
              <option key={item.label} value={item.label}>
                {item.label}
              </option>
            ))}
          </Select>
        );
      case InputType.TextArea:
        return (
          <Textarea
            {...field}
            required
            placeholder={placeholder}
            w="100%"
            h="122px"
            pr="4.5rem"
            fill="none"
            zIndex={99}
            bg="transparent"
            autoComplete="on"
            borderRadius="8px"
            role="presentation"
            border={border}
          />
        );
      default:
        return (
          <Box w="100%">
            <InputGroup position="relative">
              <Input
                {...field}
                h="40px"
                w="100%"
                bg={bg || "white"}
                pr="4.5rem"
                fill="none"
                zIndex={99}
                autoComplete="on"
                borderRadius="8px"
                role="presentation"
                borderColor={borderColor}
                type={renderType()}
                placeholder={placeholder}
                defaultValue={defaultValue}
                border={border}
                color="#1A202C"
                _placeholder={{ color: placeholderColor }}
                focusBorderColor="none"
              />
              {isPass && (
                <InputRightElement
                  right="8px"
                  zIndex={999}
                  width="2.5rem"
                  position="absolute"
                >
                  <Button
                    size="sm"
                    h="1.75rem"
                    bg="none !important"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <Show /> : <Hiden />}
                  </Button>
                </InputRightElement>
              )}
            </InputGroup>
          </Box>
        );
    }
  };
  return (
    <>
      <Flex alignItems="center" gap="4px" mb={label && "4px"}>
        {label && <TemplateText fontWeight={400} fontSize={16} txt={label} />}
        {isRequired && (
          <TemplateText
            fontWeight={400}
            fontSize={16}
            txt="*"
            color="red.100"
          />
        )}
      </Flex>
      <Controller
        name={name}
        control={control}
        render={({ field }) => renderInput(field)}
      />
      <Box mt={optionsErrorsPass ? "4px" : "0px"}>
        {optionsErrorsPass.map((item) => (
          <Flex align="center" key={item.value} mb="8px">
            <TickPass />
            <TemplateText
              ml="8px"
              fontWeight={400}
              fontSize={12}
              txt={item.label}
            />
          </Flex>
        ))}
      </Box>
      {errors && errors[name] && (
        <Box style={{ color: "red" }}>{errors[name]?.message}</Box>
      )}
    </>
  );
}
