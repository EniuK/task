import React from "react";
import { Box, Typography } from "@mui/material";
import "./welove.css";

type WeLoveItem = {
  num: string;
  text: string;
};

const WeLove: React.FC = () => {
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
    <Box className={"wrapper"}>
      <Box>
        <Typography variant="h4" className={"header"}>
          Who we are
        </Typography>
        <Typography variant="body1" className={"secondHeader"}>
          We create products that have innovation and technology at their core.
          <br /> We value working with talented people that understand the
          possibilities of today.
        </Typography>
      </Box>
      <Box className={"mapWrapper"}>
        {weAre.map((item: WeLoveItem) => (
          <Box key={item.num} className={"weAreItem"}>
            <Typography
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
            </Typography>
            <Typography className="caption">{item.text}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WeLove;
