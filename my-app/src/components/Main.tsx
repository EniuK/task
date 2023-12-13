import Header from "./header";
import WhoWeAre from "./WhoWeAre";
import WeLove from "./WeLove";
import Corevalues from "./CoreValues";
import OurWorks from "./OurWorks";
import Careers from "./Careers";

import HireForm from "./HireForm";

import Footer from "./Footer";
import { Box } from "@mui/material";

const Main = () => {
  return (
    <Box>
      <Header />
      <WhoWeAre />
      <WeLove />
      <Corevalues />
      <OurWorks />
      <Careers />
      <HireForm />
      <Footer />
    </Box>
  );
};

export default Main;
