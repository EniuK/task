import { Box, Button } from "@mui/material";
interface CustomButtonProps {
  text: string;
  filling: boolean;
}
const CustomButton: React.FC<CustomButtonProps> = ({ text, filling }) => {
  const redirectToAnotherPage = () => {
    window.open(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley",
      "_blank"
    );
  };
  return (
    <Box>
      <Button
        style={{
          backgroundColor: filling ? "#46B8C8" : "white",
          borderRadius: "32.5px",
          border: "1px solid #46B8C8",
          color: filling ? "white" : "#46B8C8",
          paddingRight: " 24px",
          paddingLeft: " 24px",
        }}
        onClick={redirectToAnotherPage}
      >
        <b>{text}</b>
      </Button>
    </Box>
  );
};

export default CustomButton;
