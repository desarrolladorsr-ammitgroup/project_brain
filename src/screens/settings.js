import React from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
function Settings() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Sidebar />
            <div className='content' style={{ display: 'flex', flexDirection: 'column' ,  margin: '3%'}}>
                <h1>Welcome to the settings Menu</h1>
            </div>
        </div>
    )
}
export default Settings;