import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/ TopBar';
function Home() {

   
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

   return (
      <div className='main' style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
         <Sidebar />

         <div className='content' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>


            <TopBar />



            <div className='storm' style={{ display: 'flex', alignItems: 'flexStart', gap: '6px' }}>
               <div className='shadow p-3 mb-5 bg-white rounded' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '500px', height: '40vh', marginTop: '6%' }} ></div>
               <div className='shadow p-3 mb-5 bg-white rounded' style={{ display: 'flex', flexDirection: 'row', width: '500px', height: '40vh', marginTop: '6%', }}></div>
               <div className='shadow p-3 mb-5 bg-white rounded' style={{ display: 'flex', flexDirection: 'row', width: '500px', height: '40vh', marginTop: '6%', }}></div>
            </div>
            <div className="dropdown-container">
               <button className="dropdown-toggle" onClick={toggleDropdown}>
                  Dropdown button
               </button>
               {isOpen && (
                  <ul className="dropdown-menu">
                     <li className="dropdown-item">
                        <a href="#action1">Action 1</a>
                     </li>
                     <li className="dropdown-item">
                        <a href="#action2">Action 2</a>
                     </li>
                     <li className="dropdown-item">
                        <a href="#action3">Action 3</a>
                     </li>
                  </ul>
               )}
            </div>




            <div className='cloud' style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '200px' }}>
               <div className='shadow p-3 mb-5 bg-white rounded' style={{ display: 'flex', flexDirection: 'column', width: '500px', height: '40vh', marginTop: '5%' }} ></div>
               <div className='shadow p-3 mb-5 bg-white rounded' style={{ dislay: 'flex', flexDirection: 'column', width: '500px', height: '40vh', marginTop: '5%' }} ></div>
            </div>
         </div>
      </div>




   )
}

export default Home;