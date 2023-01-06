import { Link } from "react-router-dom";
import { Box } from "@mui/material";

function Header() {
  return (
    <Box sx={style_box}>
      <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
        <h1 style={{ display: "inline" }}>Nanna's Recipe Book</h1>
      </Link>
    </Box>
  );
}

export default Header;

const style_box = {
  padding: "1rem 2rem",
  backgroundColor: "#1e1e1e",
  color: "White",
  fontFamily: "'Courgette', cursive",
  textDecoration: "none",
  marginBottom: "1.5rem",
};
