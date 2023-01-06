import "./App.css";
import Page from "./Pages/Page";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Page />
      </ThemeProvider>
    </>
  );
}

export default App;
