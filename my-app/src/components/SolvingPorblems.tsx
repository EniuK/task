import { Box } from "@mui/material";
import "./solvingproblems.css";
const SolvingProblems = () => {
  return (
    <Box className={"wrapperCore"}>
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
