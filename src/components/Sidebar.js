import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  return (
    <div>
      <div className="d-flex" id="wrapper">
        <div
          className="border-right"
          id="sidebar"
          style={{ backgroundColor: "#10002B", width:'100%'}}
        >
          
          <div
            className="sidebar-heading"
            style={{
              color: "white",
              fontFamily: "pt-serif-caption",
              display: "flex",
              justifyContent: "center",
              marginTop: "10%",
              
            }}
          >
            <h4>
              <strong> Brain </strong>
            </h4>{" "}
          </div>
          <div
            className="list-group list-group-flush"
            style={{ backgroundColor: "#10002B", height: "100vh" , width:'180px'}}
          >
            <Link to={"/home"} style={{textDecoration:"none"}}>
              <span
                className="list-group-item list-group-item-action "
                style={{
                  backgroundColor: "#10002B",
                  color: "white",
                  cursor: "pointer",
                  border:'none',
                  textDecoration:'none'
                  
                }}
              >
                <br/>
                {" "}
                <div style={{display:'flex', flexDirection:'row', gap:'10%'}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                <strong>Home</strong>
                </div>
                
              </span>
            </Link>
            <Link to={"/assignments"} style={{ textDecoration: "none" }}>
              <span
                className="list-group-item list-group-item-action "
                style={{
                  backgroundColor: "#10002B",
                  color: "white",
                  cursor: "pointer",
                  textDecoration: "none",
                  border:'none'

                }}
              >
                <div style={{display:'flex', flexDirection:'row', gap:'10%'}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M680-600h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160h80v-80h-80v80Zm0 160v-80h160v-560H480v56l-80-58v-78h520v720H680Zm-640 0v-400l280-200 280 200v400H360v-200h-80v200H40Zm80-80h80v-200h240v200h80v-280L320-622 120-480v280Zm560-360ZM440-200v-200H200v200-200h240v200Z"/></svg>
                <strong>Assignments</strong>
                </div>
              </span>
            </Link>
            <Link to={"/settings"} style={{textDecoration:"none"}}>
              <span
                className="list-group-item list-group-item-action "
                style={{
                  backgroundColor: "#10002B",
                  color: "white",
                  cursor: "pointer",
                  border:'none',
                  textDecoration:"none"

                }}
              >
                <div style={{display:'flex', flexDirection:'row', gap:'10%'}}> 
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/></svg>
                <strong>Settings</strong>
                </div>
              </span>
            </Link>
            <Link to={"/calendarscreen"} style={{ textDecoration: "none" }}>
              <span
                className="list-group-item list-group-item-action "
                style={{
                  backgroundColor: "#10002B",
                  color: "white",
                  cursor: "pointer",
                  textDecoration: "none",
                  border:'none'

                }}
              >
                <div style={{display:'flex', flexDirection:'row', gap:'10%'}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                <strong>Calendar</strong>
                </div>
              </span>
            </Link>
            <Link to={'/'} style={{ textDecoration: "none" }}>
              <span
                className="list-group-item list-group-item-action "
                style={{
                  backgroundColor: "#10002B",
                  color: "white",
                  cursor: "pointer",
                  textDecoration: "none",
                  border:'none'

                }}
              >
                <div style={{display:'flex', flexDirection:'row', gap:'10%'}}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z"/></svg>
                <strong>Logout</strong>
                </div>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
