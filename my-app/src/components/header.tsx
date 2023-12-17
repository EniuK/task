import { Box } from "@mui/material";
import "./header.css";
import CustomButton from "./Button";
const Header = () => {
  return (
    <Box className={"header-wrapper"}>
      <Box>
        <img src="./logo.svg" alt="Logo" />
      </Box>
      <Box style={{ display: "flex", flexDirection: "row" }}>
        <Box className={"link"}>Startups</Box>
        <Box className={"link"}>Contact</Box>
        <CustomButton text={"Work with us!"} filling={false} />{" "}
      </Box>
    </Box>
  );
};

export default Header;
