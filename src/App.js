import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Setting from "./components/Settings";
import Analytics from "./components/Analytics";

// import Sidenav from "./Sidenav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/product" exact element={<Products />}></Route>

          <Route path="/settings" exact element={<Setting />}></Route>
          <Route path="/analytics" exact element={<Analytics />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
