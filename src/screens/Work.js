import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
function Work() {
  return (


    <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Sidebar />
    <div className='content' style={{ display: 'flex', flexDirection: 'column' ,  margin: '3%'}}>

    <div>
        <strong><p style={{ textAlign:'center' }}> Math Assignment: One Step Equations</p></strong>
      <div>
        <div style={{ gap: '20px', display: 'flex', flexDirection: 'row' }}>
          <div className='shadow p-3 mb-5 bg-black rounded' style={{ display: 'flex', flexDirection: 'row', width: '500px', height: '40vh', marginTop: '6%', alignItems: 'center' }}></div>
          <div className='shadow p-3 mb-5 bg-black rounded' style={{ display: 'flex', flexDirection: 'row', width: '500px', height: '40vh', marginTop: '6%' }}></div>
        </div>
          <div className='shadow p-3 mb-5 bg-black rounded' style={{ display: 'flex', marginTop: '6%'}}></div>
      </div>
      </div>


    </div>
   
</div>



    
  )
}
export default Work;