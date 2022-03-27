import React, { useState, }  from 'react';
import { GoogleLogin } from 'react-google-login';
import '../ui_components/Login.css';
import login_image from '../images/login_image.png';
import { useNavigate } from "react-router-dom";

function Login(){

    const navigateObj = useNavigate();
    const [apiCallResponse, setApiCallResponse] = useState("");
    const onSuccess = (res) => {
        console.log('Login Success: currentUser:', res.profileObj.email);
        // console.log(res)
        setApiCallResponse("Login Successful! Redirecting...")
        
        navigateObj('/Dashboard',{ state :{ userEmail: res.profileObj.email}, replace: true })

        //document.getElementById('divApiResponse').innerHTML =
        // window.localStorage.setItem('userEmail', res.profileObj.email);
        // setTimeout(() => {
           //window.location.href = window.location.protocol + "//" + window.location.host + "/Dashboard"
        // }, 200);
      };
    
      const onFailure = (res) => {
        setApiCallResponse("Login Failed! Please try again!")
        console.log('Login failed: res:', res);
      };

      
    
    return(
      <div className='div-main'>
        <div className='div-login-container'>
            <img src = {login_image} alt="login" className='img-login' />
            <h2 className='h2-tutorial'> Tutorial </h2>
            <h3 className='h3-sign-up'> Sign Up </h3>
            <GoogleLogin
            clientId={process.env.REACT_APP_CLIENT_ID}  //Client ID generated from google cloud developer console. Retrieving from .env file
            buttonText="Login"
            onSuccess={onSuccess}                       //Success callback function
            onFailure={onFailure}                       //Failure callback function
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}                           //To keep user logged in
            />
            <div id="div-api-response" style={{marginTop:"20px"}}>{apiCallResponse}</div> {/* To display the response of google sign in */}
        </div> 
        </div>
    )
}

export default Login;