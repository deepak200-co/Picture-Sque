import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Home from "./Pages/homepage/home"
import Aboutus from "./Pages/about/Aboutus"
import Contactus from "./Pages/contact/ContactUs"
import Post from "./Components/post/Post";
import Contest from "./Pages/Contest/Contest";
import AdminLogin from "./Pages/adminlogin/AdminLogin"
import Contestregistration from "./Pages/Contest/Contestregistration";
// import Admin from "./Pages/adminlogin/Customer"
import Writeblog from "./Pages/Writeblog/Writeblog";
import Myblogs from "./Components/Myblogs/Myblogs";
// import Blogcards from "./Components/Blogcards/Blogcards";
import Landingpage from "./Pages/Landingpage/Landingpage";
import Allblogs from "./Pages/Allblogs/Allblogs";
import Profile from "./Pages/Profile/Profile";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import Admin from "./Pages/Admin/Admin";
import Admin1 from "./Pages/Admin/Admin1";
import Admin2 from "./Pages/Admin/Admin2";
function App() {
  return (
    <>
    {/* <Admin /> */}
      {/* <MainHomepage />
      <Post/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage/>} />
          <Route path="/Myblogs" element={<Myblogs/>} />
          <Route path="/Allblogs" element={<Allblogs/>} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Admin1" element={<Admin1 />} />
          <Route path="/Admin2" element={<Admin2 />} />
          <Route path="/Write" element={<Writeblog />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Myblogs" element={<Myblogs />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/AdminLogin" element={<AdminLogin />} />
          <Route path="/Admin" element={<Admin/>} />
          <Route path="/Contest" element={<Contest/>} />
          <Route path="/Contestregistration" element={<Contestregistration/>} />
          
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
