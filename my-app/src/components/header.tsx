import React from "react";
import { Box } from "@mui/material";
import "./header.css";
import CustomButton from "./Button";

const Header = () => {
  return (
    <Box className={"header-wrapper"}>
      <Box
        sx={{
          marginLeft: { xs: "10px", md: "100px", sm: "10px" },
          marginRight: { xs: "10px", md: "20px", sm: "10px" },
        }}
      >
        <img src="./logo.svg" alt="Logo" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", sm: "column" },
          alignItems: { xs: "center", md: "flex-end", sm: "center" },
          marginTop: { xs: "20px", md: "0", sm: "20px" },
          height: "100%",
          paddingRight: { xs: 0, md: "50px", sm: 0 },
        }}
      >
        <Box
          className={"link"}
          sx={{
            marginBottom: { xs: "10px", md: "10px", sm: "10px" },
          }}
        >
          Startups
        </Box>
        <Box
          className={"link"}
          sx={{
            marginBottom: { xs: "10px", md: "10px", sm: "10px" },
          }}
        >
          Contact
        </Box>
        <CustomButton text={"Work with us!"} filling={false} />
      </Box>
    </Box>
  );
};

export default Header;
