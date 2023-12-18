import { Box, useMediaQuery } from "@mui/material";
import "./solving.css";

const Solving = () => {
  const isSmallScreen = useMediaQuery("(min-width: 500px)");

  return (
    <Box className={"solving-problems-wrapper"}>
      {isSmallScreen && (
        <Box>
          <img
            src="./Thumb.png"
            alt="thumb"
            style={{ transform: "scaleX(-1)" }}
          />
        </Box>
      )}

      <Box className={"solving-text"}>
        Startups create a world that actually is better. Any problem that can be
        solved, will be solved by a startup, and that is a huge opportunity.
      </Box>
      {isSmallScreen && (
        <Box>
          <img src="./Thumb.png" alt="thumb" />
        </Box>
      )}
    </Box>
  );
};

export default Solving;
