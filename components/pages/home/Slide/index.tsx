import { Box, Image } from "@chakra-ui/react";
import TemplateText from "components/common/Text/TemplateText";
import React, { useMemo } from "react";
import Slider from "react-slick";

export default function Slide() {
  const PARTNERS = [
    "/images/partners/partner1.png",
    "/images/partners/partner2.png",
    "/images/partners/partner3.png",
    "/images/partners/partner4.png",
    "/images/partners/partner5.png",
    "/images/partners/partner6.png",
    "/images/partners/partner7.png",
    "/images/partners/partner8.png",
    "/images/partners/partner9.png",
    "/images/partners/partner10.png",
    "/images/partners/partner11.png",
    "/images/partners/partner12.png",
  ];

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#000",
          borderRadius: "50px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "#000",
          borderRadius: "50px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: true,
          },
        },

        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
            autoplaySpeed: 2000,
          },
        },
      ],
    };
  }, []);

  return (
    <Box
      p="70px 20px"
      bg="#F6F6F6"
      id="#slide"
      scrollMarginTop={{ base: "200px", lg: "unset" }}
    >
      <TemplateText
        txt="Our Partners"
        textAlign="center"
        fontSize={{ base: "30px", md: "50px" }}
        mb="20px"
        fontWeight={700}
      />
      <Slider {...settings}>
        {PARTNERS?.map((partner) => (
          <Image src={partner} alt={partner} w="260px" key={partner} />
        ))}
      </Slider>
    </Box>
  );
}
