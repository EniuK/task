import React from "react";
import { Box, Button } from "@mui/material";
import "./ourworks.css";
interface WorkItem {
  maintext: string;
  text: string;
  img: string;
  color: string;
}

interface OurWorksProps {
  works: WorkItem[];
}

const OurWorks: React.FC<OurWorksProps> = () => {
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
    <Box>
      <Box>OurWorks</Box>
      {sampleWorks.map((work, index) => (
        <Box key={index}>
          <Box>{work.maintext}</Box>
          <Box>{work.text}</Box>
          <Box>
            <img src={work.img} alt={`Work ${index}`} />
          </Box>
          <Button>Click me</Button>
        </Box>
      ))}
    </Box>
  );
};

export default OurWorks;
