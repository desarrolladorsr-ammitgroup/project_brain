import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Sidebar() {
    return (
        <div>
            <div className="d-flex" id="wrapper">
                <div className="border-right" id="sidebar" style={{backgroundColor:'#10002B'}} >
                    <div className="sidebar-heading" style={{ color:'white', fontFamily:'pt-serif-caption', display:'flex', justifyContent:'center', marginTop:'10%'}}><h4><strong> Brain </strong></h4>  </div>
                    <div className="list-group list-group-flush" style={{backgroundColor:'#10002B', height:'100vh'}} >
                        <span  className="list-group-item list-group-item-action " style={{backgroundColor:'#10002B',color:'white', cursor:'pointer'}} > <strong>Home</strong></span>
                        
                        <span className="list-group-item list-group-item-action " style={{backgroundColor:'#10002B', color:'white',cursor:'pointer'}}> <Link to={'assignments'}><button><strong> Assignments</strong></button></Link></span>
                        
                        <span  className="list-group-item list-group-item-action " style={{backgroundColor:'#10002B',color:'white',cursor:'pointer'}}> <Link to={'settings'}><button><strong>Settings</strong></button></Link></span>
                    </div>
                </div>

                <div id="page-content-wrapper">
                    <div className="container-fluid">
                        <h1 className="mt-4">Welcome to the Sidebar Example</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;