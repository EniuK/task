import { Box, useMediaQuery } from "@mui/material";
import "./solvingproblems.css";

const SolvingProblems = () => {
  const isSmallScreen = useMediaQuery("(min-width: 900px)");

  return (
    <Box className={"problems-wrapper"}>
      {isSmallScreen && (
        <Box
          style={{ position: "absolute", right: "5%", marginBottom: "50px" }}
        >
          <img src="./personalAssistan.png" alt="help" />
        </Box>
      )}

      <Box>
        <img
          src="./Thumb.png"
          alt="thumb"
          style={{ transform: "scaleX(-1)" }}
        />
      </Box>
      <Box className={"text-solving"}>We love solving problems!</Box>
      <Box>
        <img src="./Thumb.png" alt="thumb" />
      </Box>
    </Box>
  );
};

export default SolvingProblems;
