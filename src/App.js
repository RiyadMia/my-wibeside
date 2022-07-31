import { Routes, Route } from "react-router-dom";
import About from "./About";
import "./App.css";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import Car from "./Page/Car";
import Doctor from "./Page/Doctor";
import Portal from "./Page/Doctor-Portal";
import Electric from "./Page/Electric";
import Header from "./Page/Header";
import Mobile from "./Page/Mobile-Shop";
import Navbar from "./Page/Navbar";
import Tishart from "./Page/Tishart";
import Project from "./Project";
import Service from "./Service";

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/mobile" element={<Mobile></Mobile>}></Route>
        <Route path="/doctor" element={<Doctor></Doctor>}></Route>
        <Route path="electric" element={<Electric></Electric>}></Route>
        <Route path="car" element={<Car></Car>}></Route>
        <Route path="doctor-service" element={<Portal></Portal>}></Route>
        <Route path="tishart" element={<Tishart></Tishart>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blog></Blog>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Portfolio" element={<Project></Project>}></Route>
        <Route path="/Service" element={<Service></Service>}></Route>
      </Routes>
    </div>
  );
}

export default App;
