import { Flex } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import DateTimeDisplay from "components/pages/home/Banner/Countdown/DateTimeDisplay";
import React from "react";

export default function CountDown({
  days,
  hours,
  minutes,
  seconds,
}: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}) {
  return (
    <Flex
      bg="#fff"
      gap={{ base: "0px", md: "10px", xl: "20px" }}
      p="10px"
      borderRadius="20px"
      w={{ base: "100%", md: "unset" }}
    >
      <DateTimeDisplay type="common:banner.days" value={days} />
      <TemplateText txt=":" fontSize={{ base: "30px", xl: "60px" }} />
      <DateTimeDisplay type="common:banner.hours" value={hours} />
      <TemplateText txt=":" fontSize={{ base: "30px", xl: "60px" }} />

      <DateTimeDisplay type="common:banner.minutes" value={minutes} />
      <TemplateText txt=":" fontSize={{ base: "30px", xl: "60px" }} />

      <DateTimeDisplay type="common:banner.second" value={seconds} />
    </Flex>
  );
}
