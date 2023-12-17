import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./footer.css";
const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr 1fr" },
        gap: 2,
        p: 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "auto" },
          margin: "auto",
          textAlign: "center",
        }}
      >
        <img src="logo.svg" alt="Logo" />
        <Typography variant="body1">© 2020 Startupz. </Typography>
        <Typography variant="body1">All rights reserved. </Typography>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "auto" },
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" sx={{ display: { xs: "block", md: "block" } }}>
          Companies
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", md: "column" },
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-start" },
          }}
        >
          <Link href="#" className="links-companies">
            Tolq
          </Link>
          <Link href="#" className="links-companies">
            LegalSite
          </Link>
          <Link href="#" className="links-companies">
            Codekeeper
          </Link>
          <Link href="#" className="links-companies">
            Feedback Labs
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "auto" },
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h6">Nagłówek sekcji</Typography>
        <Box>
          <Typography variant="body1">Napis sekcji</Typography>
        </Box>
        <Box>
          <Typography variant="body2">Informacje kontaktowe</Typography>
          <Typography variant="body2">Adres</Typography>
          <Typography variant="body2">Numer telefonu</Typography>
          <Typography variant="body2">Email</Typography>
          <Link href="#">Dodatkowy link</Link>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "auto" },
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">Napis na górze</Typography>
        <Box>
          <img src="img1.png" alt="Image1" />
          <img src="img2.png" alt="Image2" />
          <img src="img3.png" alt="Image3" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
