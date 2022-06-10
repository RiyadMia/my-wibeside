import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Car from "./Page/Car";
import Doctor from "./Page/Doctor";
import Portal from "./Page/Doctor-Portal";
import Electric from "./Page/Electric";
import Header from "./Page/Header";
import Mobile from "./Page/Mobile-Shop";
import Tishart from "./Page/Tishart";

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/mobile" element={<Mobile></Mobile>}></Route>
        <Route path="/doctor" element={<Doctor></Doctor>}></Route>
        <Route path="electric" element={<Electric></Electric>}></Route>
        <Route path="car" element={<Car></Car>}></Route>
        <Route path="doctor-service" element={<Portal></Portal>}></Route>
        <Route path="tishart" element={<Tishart></Tishart>}></Route>
        <Route path="" element></Route>
      </Routes>
    </div>
  );
}

export default App;
