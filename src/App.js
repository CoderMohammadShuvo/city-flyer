import "./App.css";
import Main from "./Component/Home/Main/Main";
import Navbar from "./Component/Home/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Component/pages/Login";
import Searchpage from "./Component/pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="Search" element={<Searchpage />} />
        
      </Routes>
    </div>
  );
}

export default App;
