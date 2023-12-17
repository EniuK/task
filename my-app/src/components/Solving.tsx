import { Box } from "@mui/material";
import "./solving.css";
const Solving = () => {
  return (
    <Box className={"solving-problems-wrapper"}>
      <Box>
        <img
          src="./Thumb.png"
          alt="thumb"
          style={{ transform: "scaleX(-1)" }}
        />
      </Box>
      <Box className={"solving-text"}>
        Startups create a world that actually is better. Any problem that can be
        solved, will be solved by a startup, and that is a huge opportunity.
      </Box>
      <Box>
        <img src="./Thumb.png" alt="thumb" />
      </Box>
    </Box>
  );
};

export default Solving;
