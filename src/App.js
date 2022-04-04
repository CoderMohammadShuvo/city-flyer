import "./App.css";
import Main from "./Component/Home/Main/Main";
import Navbar from "./Component/Home/Navbar/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Component/pages/Login";
import Searchpage from "./Component/pages/SearchPage";
import SignUp from "./Component/pages/SignUp";
import {UserAuthContextProvider} from "./context/UserAuthContext";
import ProtectedRoute from "./Component/ProtectedRoute";




function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="Search" element={<Searchpage />} />
        <Route path="SignUp" element={<SignUp />} />
        
      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
