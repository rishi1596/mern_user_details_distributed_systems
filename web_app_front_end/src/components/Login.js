import React, { useState, }  from 'react';
import { GoogleLogin } from 'react-google-login';
import '../ui_components/Login.css';
import login_image from '../images/login_image.png';
import { useNavigate } from "react-router-dom";
import ApiCall from '../Utils/ApiCall';

function Login(){

    const navigateObj = useNavigate();
    const [apiCallResponse, setApiCallResponse] = useState("");
    const onSuccess = (res) => {
        //console.log('Login Success: currentUser:', res.profileObj);

        var oUserDetails = {"name":res.profileObj.name, "email_id":res.profileObj.email, "profile_url":res.profileObj.imageUrl}
        ApiCall(process.env.REACT_APP_API_POST_NEW_USER_DETAILS, process.env.REACT_APP_API_METHOD_TYPE_POST,
           JSON.stringify(oUserDetails)).then(
             (response) => {
                console.log(response)
                if(response["status"] === "success") {
                  setApiCallResponse("Login Successful! Redirecting...")
                  setTimeout(() => {
                    navigateObj('/Dashboard',{ state :{ userEmail: res.profileObj.email}, replace: true })
                  }, 200);
                } else {
                  setApiCallResponse(response["msg"])
                }
              }
            )
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