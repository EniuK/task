import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import "./welove.css";

type WeLoveItem = {
  num: string;
  text: string;
};

const WeLove: React.FC = () => {
  const isTablet = useMediaQuery("(min-width: 900px)");

  const weAre: WeLoveItem[] = [
    {
      num: "01",
      text: "We develop innovative products, systems and services",
    },
    {
      num: "02",
      text: "Next we build teams to scale them into companies",
    },
    {
      num: "03",
      text: "Each startup solving one problem at a time",
    },
  ];

  return (
    <Box className={"we-love-wrapper"}>
      <Box className={"text-wrapper-we-love"}>
        <Box className={"we-are-header"}>Who we are</Box>
        <Box className={"second-header"}>
          We create products that have innovation and technology at their core.
          <br /> We value working with talented people that understand the
          possibilities of today.
        </Box>
      </Box>
      <Box className={"map-wrapper"}>
        {weAre.map((item: WeLoveItem) => (
          <Box key={item.num} className={"we-are-item"}>
            <Box
              className="num"
              sx={{
                position: "relative",
                display: "inline-block",
                paddingBottom: "10px",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "2px",
                  backgroundColor: "#3D4F5C",
                },
              }}
            >
              {item.num}
            </Box>
            <Box className="caption">{item.text}</Box>
          </Box>
        ))}
      </Box>
      {isTablet && (
        <Box style={{ position: "absolute", right: "15%" }}>
          <img src="./questionmark.svg" alt="questionmark" />
        </Box>
      )}
    </Box>
  );
};

export default WeLove;
