import { NavLink } from "react-router-dom";
import { Button, Box } from "@mui/material";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import SetMealIcon from '@mui/icons-material/SetMeal';
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "#1e1e1e",
  padding: "1rem 1.5rem",
  borderRadius: "30px",
  "&:hover": {
    backgroundColor: "#111111",
  },
}));

function Categories() {
  return (
    <Box sx={style_outer}>
      <NavLink to={"/cuisine/italian"} style={{ textDecoration: "none" }}>
        <MyButton variant="contained" startIcon={<LocalPizzaIcon />} size="large">Italian</MyButton>
      </NavLink>

      <NavLink to={"/cuisine/american"} style={{ textDecoration: "none" }}>
        <MyButton variant="contained" startIcon={<LunchDiningIcon />} size="large">American</MyButton>
      </NavLink>

      <NavLink to={"/cuisine/thai"} style={{ textDecoration: "none" }}>
        <MyButton variant="contained" startIcon={<RamenDiningIcon />} size="large">Thai</MyButton>
      </NavLink>

      <NavLink to={"/cuisine/chinese"} style={{ textDecoration: "none" }}>
        <MyButton variant="contained" startIcon={<SetMealIcon />} size="large">Chinese</MyButton>
      </NavLink>
    </Box>
  );
}

export default Categories;

const style_outer = {
    margin: "1.5rem 0",
    display: "flex",
    gap: "2rem",
    justifyContent: "center"
};