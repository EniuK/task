import React from "react";
import { Box } from "@mui/material";
import "./header.css";
import CustomButton from "./Button";

const Header = () => {
  return (
    <Box className={"header-wrapper"}>
      <Box
        sx={{
          marginLeft: { xs: "10px", md: "100px" },
          marginRight: { xs: "10px", md: "20px" },
        }}
      >
        <img src="./logo.svg" alt="Logo" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-end" },
          marginTop: { xs: "20px", md: "0" },
          height: "100%",
          paddingRight: { xs: 0, md: "50px" },
        }}
      >
        <Box
          className={"link"}
          sx={{
            marginBottom: { xs: "10px", md: "10px" }, // Dodano margines tylko na małych ekranach
          }}
        >
          Startups
        </Box>
        <Box
          className={"link"}
          sx={{
            marginBottom: { xs: "10px", md: "10px" }, // Dodano margines tylko na małych ekranach
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
