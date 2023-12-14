import { Box, Typography } from "@mui/material";
import "./corevalues.css";
type CoreVaalues = {
  num: string;
  text: string;
};

const Corevalues: React.FC = () => {
  const weAre: CoreVaalues[] = [
    {
      num: "01",
      text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
    },
    {
      num: "02",
      text: "Talent is what enable us to create great companies.",
    },
  ];

  return (
    <Box className={"mapWrapper"}>
      {weAre.map((item: CoreVaalues) => (
        <Box key={item.num} className={"weAreItem"}>
          <Typography
            className="num"
            sx={{
              position: "relative",
              display: "inline-block",
              paddingBottom: "10px",
              "&:after": {
                content: '""',
                position: "absolute",
                left: 0,
                right: 0,
                bottom: 0,
                height: "2px",
                backgroundColor: "#3D4F5C",
              },
            }}
          >
            {item.num}
          </Typography>
          <Typography className="caption">{item.text}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Corevalues;
