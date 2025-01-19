// import "./App.css";
import About from "./Components/About/About";
import { Box } from "./Components/Context/Box";
import { ThemeContextProvider } from "./Components/Context/ThemeContext";
import { UserContextProvider } from "./Components/Context/UserContext";
import List from "./Components/Generics/List";
import Toster from "./Components/Generics/Toster";
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
          {/* <List items={['anc', 'books', 'apple', 'gravity']} onClick={(item)=>console.log(item)}/>
          <List items={[1,2,3,4,5]} onClick={(item)=>console.log(item)}/>
          <List items={[
            {
              first:'First',
              last:'last'
            },
            {
              first:'First',
              last:'last'
            },
          ]} onClick={(item)=>console.log(item)}/> */}

          <Toster position="center"/>
        </ThemeContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
