import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Login/Register";
import Home from "./Components/Home";
import Main from "./Components/Main";
import Order from "./Components/Order";
import Detail from "./Components/Home1";
import Admin from "./Components/admin/AdminPage";
import AdminPage1 from "./Components/admin/Adminpage1";
import AdminPage2 from "./Components/admin/Adminpage2";
import ProductAdmin from "./Components/admin/ProductAdmin";
import Addbook from "./Components/admin/Addbook";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="/order" element={<Order />} />
            <Route path="/home1" element={<Detail />} />
          </Route>
          <Route path="/admin" element={<Admin />}>
            <Route index element={<AdminPage1 />} />
            <Route path="/admin/adminpage2" element={<AdminPage2 />} />
            <Route path="/admin/productadmin/:id/:name" element={<ProductAdmin />} />
            <Route path="/admin/addbook" element={<Addbook />} />


          </Route>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
