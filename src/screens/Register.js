import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Register() {
  return (
     


      <div className='backgroundregister' style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <div className='' styles={{width: 'fit-content', borderRadius: '50%', display: 'flex', flexDirection: 'row', alignSelf: 'center'}}>
        <div className='col-4' style={{ backgroundColor: '#6610f2', width: '100%' , borderTopLeftRadius:'5%', borderBottomLeftRadius:'5%'}}>
                    <div style={{margin:'20px',textAlign:'center',color:'white'}}>
                        <h1> Welcome to the Future</h1>
                        
                    </div>

                </div>

      <div className='col-4' style={{ backgroundColor: 'white', width: '100%' , borderTopRightRadius:'5%', borderBottomRightRadius:'5%', display:'flex', justifyContent:'center', flexDirection:'column'}}>
                    <div style={{margin:'40px'}}>
                  <h2>Register</h2> 
           
            <input type="text" class="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1"></input>
          <input type="text" class="form-control" placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1"></input>
          <input type="text" class="form-control" placeholder="Home Address" aria-label="Username" aria-describedby="basic-addon1"></input>
          <div class="input-group mb-3">
  <div class="input-group-prepend">
    <label class="input-group-text" for="inputGroupSelect01">Options</label>
  </div>
  <select class="custom-select" id="inputGroupSelect01">
    <option selected>Select your region</option>
    <option value="1">Alabama</option>
    <option value="2">Alaska</option>
    <option value="3">Arizona</option>
    <option value="4">Arkansas</option>
    <option value="5">California</option>
    <option value="6">Colorado</option>
    <option value="7">Connecticut</option>
    <option value="8">Delaware</option>
    <option value="9">Florida</option>
    <option value="10">Georgia</option>
    <option value="11">Hawaii</option>
    <option value="12">Idaho</option>
    <option value="13">Illinois</option>
    <option value="14">Indiana</option>
    <option value="15">Iowa</option>
    <option value="16">Kansas</option>
    <option value="17">Kentucky</option>
    <option value="18">Louisiana</option>
    <option value="19">Maine</option>
    <option value="20">Maryland</option>
    <option value="21">Massachusetts</option>
    <option value="22">Michigan</option>
    <option value="23">Minnesota</option>
    <option value="24">Mississippi</option>
    <option value="25">Missouri</option>
    <option value="26">Montana</option>
    <option value="27">Nebraska</option>
    <option value="28">Nevada</option>
    <option value="29">New Hampshire</option>
    <option value="30">New Jersey</option>
    <option value="31">New Mexico</option>
    <option value="32">New York</option>
    <option value="33">North Carolina</option>
    <option value="34">North Dakota</option>
    <option value="35">Ohio</option>
    <option value="36">Oklahoma</option>
    <option value="37">Oregon</option>
    <option value="38">Pennsylvania</option>
    <option value="39">Rhode Island</option>
    <option value="40">South Carolina</option>
    <option value="41">South Dakota</option>
    <option value="42">Tennessee</option>
    <option value="43">Texas</option>
    <option value="44">Utah</option>
    <option value="45">Vermont</option>
    <option value="46">Virginia</option>
    <option value="47">Washington</option>
    <option value="48">West Virginia</option>
    <option value="49">Wisconsin</option>
    <option value="50">Wyoming</option>
  </select>
  </div>
            <input type="text" class="form-control" placeholder=" Current School" aria-label="Username" aria-describedby="basic-addon1"></input>
            <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
            <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
            <input type="password" class="form-control" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1" />
            <Link to={'login'}>
            <button className='btn' style={{ width:'100%',backgroundColor:'#6610f2',color:'white'}}>
            Create Account
          </button>
          </Link>
          <div style={{alignSelf:'center', width:'100wv', textAlign:'center'}}>
          <p style={{marginTop:'10px'}}>or</p>
          <Link to={'/'}>
          <button className='btn' style={{width:'100%', backgroundColor:'#03045e', color:'white'}}>
           Login in
          </button>
          </Link>
           </div>
          </div>
          
        </div>
       </div>

      </div>

  


  )
}
export default Register;