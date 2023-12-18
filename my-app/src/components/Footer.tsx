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
        marginTop: "60px",
        marginBottom: "60px",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "auto", sm: "100%" },
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
          width: { xs: "100%", md: "auto", sm: "100%" },
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ display: { xs: "block", md: "block", sm: "block" } }}
        >
          Companies
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "row", sm: "row", md: "column" },
            justifyContent: { xs: "center", sm: "center", md: "flex-start" },
            alignItems: { xs: "center", sm: "center", md: "flex-start" },
            marginTop: "10px",
          }}
        >
          <Link
            href="#"
            className="links-companies"
            style={{ textDecoration: "none", marginTop: "10px" }}
          >
            Tolq &nbsp;
          </Link>
          <Link
            href="#"
            className="links-companies"
            style={{ textDecoration: "none", marginTop: "10px" }}
          >
            LegalSite &nbsp;
          </Link>
          <Link
            href="#"
            className="links-companies"
            style={{ textDecoration: "none", marginTop: "10px" }}
          >
            Codekeeper &nbsp;
          </Link>
          <Link
            href="#"
            className="links-companies"
            style={{ textDecoration: "none", marginTop: "10px" }}
          >
            Feedback Labs &nbsp;
          </Link>
        </Box>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "auto", sm: "100%" },
          margin: "auto",
          textAlign: { xs: "center", md: "left", sm: "center" },
        }}
      >
        <Typography variant="h6">Contact</Typography>
        <Box>
          <Box sx={{ padding: { xs: "30px", sm: "30px" } }}>
            World Trade Center - The Hague Prinses Margrietplantsoen 33 2595 AM
            The Hague The Netherlands
          </Box>
        </Box>
        <Box>
          <Link href="#" style={{ textDecoration: "none" }}>
            Send us an email
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "100%", md: "auto", sm: "100%" },
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h5">Follow us</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start", sm: "center" },
          }}
        >
          <img src="twitter.svg" alt="Image1" className={"icon"} />
          <img src="linkedin.svg" alt="Image2" className={"icon"} />
          <img src="instagram.svg" alt="Image3" className={"icon"} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
