import { Box, useMediaQuery } from "@mui/material";
import CustomButton from "./Button";
import "./careers.css";
const Careers = () => {
  const isSmallScreen = useMediaQuery("(min-width: 900px)");

  return (
    <Box className={"careers-wrapper"}>
      {isSmallScreen && (
        <Box className={"image-wrapper"}>
          <img src="./hiringLeft.png" alt="human_with_hat_image" />
        </Box>
      )}

      <Box className={"text-wrapper"}>
        <Box className={"hiring-header-text"}>We are hiring!</Box>
        <Box className={"hiring-second-text"}>
          <b>
            {" "}
            We're always looking for talented people <br /> to join and help
            build our startups. <br /> Check out our current openings
          </b>
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <CustomButton text="See current openings " filling={true} />
        </Box>
      </Box>
      {isSmallScreen && (
        <Box className={"image-wrapper"}>
          <img src="./hiringRight.png" alt="human_with_telescope" />
        </Box>
      )}
    </Box>
  );
};

export default Careers;
