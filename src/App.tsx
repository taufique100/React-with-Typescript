import "./App.css";
import About from "./Components/About/About";
import { Box } from "./Components/Context/Box";
import { ThemeContextProvider } from "./Components/Context/ThemeContext";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <h1>App</h1>
        <Box/>
        <Home />
        <About />
      </ThemeContextProvider>
    </>
  );
}

export default App;
