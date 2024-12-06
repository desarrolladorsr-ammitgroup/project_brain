import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

function Login() {
    return (
        <div className='backgroundlogin' style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='' style={{ width: 'fit-content', borderRadius: '100%', display: 'flex', flexDirection: 'row', alignSelf: 'center' }}>
                <div className='col-4' style={{ backgroundColor: '#6610f2', width: '70%' , borderTopLeftRadius:'5%', borderBottomLeftRadius:'5%'}}>
                    <div style={{margin:'70px',textAlign:'center',color:'white'}}>
                        <h1> Welcome back</h1>
                        <h4>Thank you for joining the Future</h4>
                    </div>

                 </div>

                 <div className='col-4' style={{ backgroundColor: 'white', width: '50%' , borderTopRightRadius:'5%', borderBottomRightRadius:'5%', display:'flex', justifyContent:'center', flexDirection:'column'}}>
                    <div style={{margin:'40px'}}>
                    <h2>Log in</h2>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

                    </div>
                    <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" />
                    <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Remember me
                        </label>
                    <button className='btn'>
                        Forgot password?
                    </button>

                    </div>
                    <Link to={'/'}>
                    <button className='btn' style={{width:'100%', backgroundColor:'#03045e', color:'white',}}>
                        Sign In
                    </button>
                     </Link>

                    <div style={{alignSelf:'center', width:'100wv', textAlign:'center'}}>
                        
                        <p style={{marginTop:'10px'}}>or</p>
                    <Link to={'register'}>
                    <button className='btn' style={{ width:'100%',backgroundColor:'#6610f2',color:'white'}}>
                        Create an Account
                    </button>
                    </Link>
                    </div>

                    </div>
                </div>



            </div>
        </div>


    )
}



export default Login; 