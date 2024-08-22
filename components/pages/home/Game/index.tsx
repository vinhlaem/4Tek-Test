import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import useTranslation from "next-translate/useTranslation";
import React from "react";

export default function Game() {
  const { t } = useTranslation();

  const GAMES = [
    {
      name: "E-Space",
      image: "/images/games/BG.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Pirates",
      image: "/images/games/BG-1.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Magic tree",
      image: "/images/games/BG-2.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Kingland",
      image: "/images/games/BG-3.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Witch Party",
      image: "/images/games/BG-4.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Aborigines",
      image: "/images/games/BG-5.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "The Last Game",
      image: "/images/games/BG-6.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Rocky",
      image: "/images/games/BG-7.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Cinderella",
      image: "/images/games/BG-8.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "G-Dragon",
      image: "/images/games/BG-9.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Blue Fire",
      image: "/images/games/BG-10.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Egypt Game",
      image: "/images/games/BG-11.png",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const checkIndex = (index: number) => {
    if (index == 1 || index == 4 || index == 7 || index == 10) {
      return "50px";
    } else {
      return "unset";
    }
  };
  return (
    <Flex
      className="maxW"
      p="20px 16px"
      id="#game"
      justifyContent="center"
      alignItems="center"
      direction="column"
      scrollMarginTop={{ base: "350px", lg: "100px" }}
    >
      <TemplateText
        txt={t("common:game.title")}
        fontSize={{ base: "60px", xl: "80px" }}
        fontWeight={700}
        textAlign="center"
      />
      <TemplateText
        txt={t("common:game.content")}
        fontSize="14px"
        textAlign="center"
        maxW="500px"
        fontWeight={400}
      />
      <SimpleGrid columns={{ base: 2, md: 3, xl: 4 }} mt="20px">
        {GAMES?.map((game, index) => (
          <Flex
            key={game.name}
            backgroundImage={game.image}
            borderRadius="20px"
            direction="column"
            role="group"
            h="560px"
            mt={{
              base: index % 2 != 0 ? "50px" : "unset",
              md: checkIndex(index),
              xl: index % 2 != 0 ? "50px" : "unset",
            }}
            w="100%"
            justifyContent="end"
            gap="10px"
          >
            <Box p="20px">
              <TemplateText
                txt={game.name}
                fontSize={{ base: "30px", md: "48px" }}
                lineHeight="45px"
                color="#fff"
                borderRadius="50px"
              />
              <TemplateText
                txt={game.content}
                color="#fff"
                borderRadius="50px"
              />
            </Box>
          </Flex>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
