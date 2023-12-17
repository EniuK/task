import React from "react";
import { Box, Button } from "@mui/material";
import "./ourworks.css";
import CustomButton from "./Button";
import Solving from "./Solving";
interface WorkItem {
  maintext: string;
  text: string;
  img: string;
  color: string;
}

const OurWorks: React.FC = () => {
  const sampleWorks: WorkItem[] = [
    {
      maintext: "Tolq",
      text: "Tolq is the translation solution built for e-commerce. It provides all pieces of the localization puzzle in one single integrated solution.",
      img: "./firstLaptop.png",
      color: "#A9BC87",
    },
    {
      maintext: "Feedback Labs",
      text: "Feedback Labs turns feedback into actionable insights for your team.",
      img: "./secondLaptop.png",
      color: "#8BB5C9",
    },
    {
      maintext: "Codekeeper",
      text: "Codekeeper is an all-in-one solution for software developers and publishers to provide source code escrow as part of service level and license agreements.",
      img: "./thirdLaptop.png",
      color: "#00A0B6",
    },
    {
      maintext: "LegalSite",
      text: "Protected against legal risks, privacy compliant and always up-to-date with the latest regulatory developments.",
      img: "./fourthLaptop.png",
      color: "#8B60D3",
    },
  ];

  return (
    <Box className="our-works-container">
      <Box className="section-title">Our works</Box>
      <Box className="works-wrapper">
        {sampleWorks.map((work, index) => (
          <Box key={index} className="work-item">
            <Box className="maintext" style={{ color: `${work.color}` }}>
              {work.maintext}
            </Box>
            <Box className="down-text">{work.text}</Box>
            <Box className="image-container">
              <img className="image" src={work.img} alt={`Work ${index}`} />
            </Box>
            <Box style={{ marginTop: "20px" }}>
              <CustomButton text="More" filling={false} />
            </Box>
          </Box>
        ))}
      </Box>
      <Box>
        <Solving />
      </Box>
    </Box>
  );
};

export default OurWorks;
