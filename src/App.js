import "@fortawesome/fontawesome-free/css/all.min.css";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../src/assets/css/animate.min.css";
import "../src/assets/css/demo.css";
import "../src/assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import AdminLayout from "../src/layouts/Admin.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/home/*" element={<AdminLayout />}></Route> */}
        <Route path="/home" render={(props) => <AdminLayout {...props} />} />
        <Route from="/" to="/home/dashboard" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
