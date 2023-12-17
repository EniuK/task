import { Box, Typography, useMediaQuery } from "@mui/material";
import CustomButton from "./Button";

import "./whoweare.css";

const WhoWeAre = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1440px)");

  return (
    <Box className={"we-are-wrapper"}>
      <Box
        className={"text-container"}
        sx={{
          textAlign: { xs: "center", md: "left" },
          maxWidth: { xs: "100%", md: "50%" },
          order: { xs: 2, md: 1 },
          marginBottom: { xs: "20px", md: "0" },
        }}
      >
        <Box className={"main"}>
          We Create <br />
          Startups.
        </Box>
        <Box className={"secondParagraph"}>
          <Typography>
            We are a startup studio that develops and launches new companies.
          </Typography>
        </Box>
        <CustomButton text={"See our works"} filling={true} />
      </Box>
      <Box
        className={"image-container"}
        sx={{
          maxWidth: "100%",
          order: { xs: 1, md: 2 },
          margin: { xs: "0", md: "0" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          height: "100%",
        }}
      >
        <img
          src="./headerimage.png"
          alt="Header_Image"
          style={{
            width: "100%",
            height: isSmallScreen ? "auto" : "100%",
            objectFit: "cover",
            objectPosition: "right bottom",
          }}
        />
      </Box>
    </Box>
  );
};

export default WhoWeAre;
