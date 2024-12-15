import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Sidebar() {
    return (
        <div>
            <div className="d-flex" id="wrapper">
                <div className="border-right" id="sidebar" style={{ backgroundColor: '#10002B' }} >
                    <div className="sidebar-heading" style={{ color: 'white', fontFamily: 'pt-serif-caption', display: 'flex', justifyContent: 'center', marginTop: '10%' }}><h4><strong> Brain </strong></h4>  </div>
                    <div className="list-group list-group-flush" style={{ backgroundColor: '#10002B', height: '100vh' }} >
                        <Link to={'/home'}>
                        <span className="list-group-item list-group-item-action " style={{ backgroundColor: '#10002B', color: 'white', cursor: 'pointer' }} > <strong>Home</strong></span>
                        </Link>
                        <Link to={'/assignments'} style={{ textDecoration: 'none' }}>
                            <span className="list-group-item list-group-item-action " style={{ backgroundColor: '#10002B', color: 'white', cursor: 'pointer', textDecoration: 'none' }}>
                                <strong>
                                    Assignments
                                </strong>
                            </span>
                        </Link>
                        <Link to={'/settings'}>
                            <span className="list-group-item list-group-item-action " style={{ backgroundColor: '#10002B', color: 'white', cursor: 'pointer' }}>
                                <strong>
                                    Settings
                                </strong>
                            </span>
                        </Link>
                    </div>
                </div>

           
            </div>
        </div>
    )
}

export default Sidebar;