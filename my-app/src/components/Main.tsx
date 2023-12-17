import Header from "./header";
import WhoWeAre from "./WhoWeAre";
import WeLove from "./WeLove";
import Corevalues from "./CoreValues";
import OurWorks from "./OurWorks";
import Careers from "./Careers";
import HireForm from "./HireForm";
import Footer from "./Footer";
import { Box } from "@mui/material";
import SolvingProblems from "./SolvingPorblems";

const Main = () => {
  return (
    <Box style={{ maxWidth: "1440px" }}>
      <Header />
      <WhoWeAre />
      <WeLove />
      <SolvingProblems />
      <Corevalues />
      <OurWorks />
      <Careers />
      <HireForm />
      <Footer />
    </Box>
  );
};

export default Main;
