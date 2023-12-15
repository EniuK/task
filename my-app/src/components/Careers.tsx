import { Box } from "@mui/material";
import CustomButton from "./Button";
import "./careers.css";
const Careers = () => {
  return (
    <Box className={"careers-wrapper"}>
      <Box className={"image-wrapper"}>
        <img src="./hiringLeft.png" alt="human_with_hat_image" />
      </Box>
      <Box className={"text-wrapper"}>
        <Box>We are hiring!</Box>
        <Box>
          We're always looking for talented people to join and help build our
          startups. Check out our current openings
        </Box>
        <Box>
          <CustomButton text="See current openings " filling={true} />
        </Box>
      </Box>
      <Box className={"image-wrapper"}>
        <img src="./hiringRight.png" alt="human_with_telescope" />
      </Box>
    </Box>
  );
};

export default Careers;
