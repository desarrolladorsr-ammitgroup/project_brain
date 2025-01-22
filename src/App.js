import logo from './logo.svg';
import './App.css';
import brain from './Untitled485_20241114071941.jpg'
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Assignments from './screens/Assignments';
import Settings from './screens/Settings';
import Work from './screens/Work';
import CalendarScreen from './screens/CalendarScreen';
// Library for navigating in the web
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from "react-router-dom";

function App() {
  return (
   <div>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <BrowserRouter>
      <Routes>
          <Route path="/" index  element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/assignments" element={<Assignments/>}></Route>
          <Route path="/settings" element={<Settings/>}></Route>
          <Route path="/calendarscreen" element={<CalendarScreen/>} ></Route>
          <Route path="/work" element={<Work/>}></Route>
        </Routes>
        </BrowserRouter>
    
   </div>
  );
}

export default App;
