import { Box, Typography } from "@mui/material";
import CustomButton from "./Button";

import "./whoweare.css";
const WhoWeAre = () => {
  return (
    <Box className={"we-are-wrapper"}>
      <Box>
        <Box className={"main"}>
          We Create <br />
          Startups.
        </Box>
        <Box className={"secondParagraph"}>
          <Typography>
            We are startup studio that develops and launches new companies.
          </Typography>
        </Box>
        <Box>
          <CustomButton text={"See our works"} filling={true} />
        </Box>
      </Box>
      <Box style={{ width: "50%", overflow: "hidden" }}>
        <img src="./headerimage.png" alt="Header_Image" />
      </Box>
    </Box>
  );
};

export default WhoWeAre;
