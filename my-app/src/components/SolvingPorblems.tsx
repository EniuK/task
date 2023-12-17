import { Box } from "@mui/material";
import "./solvingproblems.css";
const SolvingProblems = () => {
  return (
    <Box className={"problems-wrapper"}>
      <Box
        style={{ position: "absolute", right: "100px", marginBottom: "50px" }}
      >
        <img src="./personalAssistan.png" alt="help" />
      </Box>
      <Box>
        <img
          src="./Thumb.png"
          alt="thumb"
          style={{ transform: "scaleX(-1)" }}
        />
      </Box>
      <Box className={"text"}>We love solving problems!</Box>
      <Box>
        <img src="./Thumb.png" alt="thumb" />
      </Box>
    </Box>
  );
};

export default SolvingProblems;
