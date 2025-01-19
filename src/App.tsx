// import "./App.css";
import About from "./Components/About/About";
import { Box } from "./Components/Context/Box";
import { ThemeContextProvider } from "./Components/Context/ThemeContext";
import { UserContextProvider } from "./Components/Context/UserContext";
import Home from "./Components/Home/Home";
import RefHook from "./Components/Home/RefHook";

function App() {
  return (
    <>
      <UserContextProvider>
        <ThemeContextProvider>
          <h1>App</h1>
          {/* <Box />

          <Home />
          <About /> */}
          <RefHook/>
        </ThemeContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
