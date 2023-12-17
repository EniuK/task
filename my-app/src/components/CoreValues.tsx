import { Box } from "@mui/material";
import "./corevalues.css";
type CoreVaalues = {
  num: string;
  text: string;
};

const Corevalues: React.FC = () => {
  const weAre: CoreVaalues[] = [
    {
      num: "01. Innovation",
      text: "Startupz operates where entrepreneurship and technology intersect. We design solutions and turn them into businesses models.",
    },
    {
      num: "02. People",
      text: "Talent is what enable us to create great companies.",
    },
  ];

  return (
    <Box className={"core-values-wrapper"}>
      <Box style={{ position: "absolute", right: "100px" }}>
        <img src="lightbulb.svg" alt="lightbulb" />
      </Box>
      <Box className={"core-title"}>Our core values</Box>
      <Box className={"core-map-wrapper"}>
        {weAre.map((item: CoreVaalues, idx: number) => (
          <Box key={item.num} className={`core-map-item${idx}`}>
            <Box
              className="num"
              sx={{
                position: "relative",
                display: "inline-block",
                paddingBottom: "40px",
                paddingTop: "40px",
                "&:after": {
                  content: '""',

                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "2px",
                  width: "50px",
                  backgroundColor: "#3D4F5C",
                },
              }}
            >
              {item.num}
            </Box>
            <Box className="caption">
              <b>{item.text}</b>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Corevalues;
