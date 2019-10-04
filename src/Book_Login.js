import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

const Book_Login = () =>{
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userID, setuserID] = useState('');
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [picture, setPicture] = useState('');

	let fbContend;
	let test;
	const responseFacebook = (response) =>{
		setIsLoggedIn(true);
		setuserID(response.userID);
		setName(response.name);
		setEmail(response.email);
		setPicture(response.picture.data.url);
		console.log(response);
		test = response;
	}

	const componentClicked = () =>{
		alert(JSON.stringify(test));
		console.log('test');
	}


	if(isLoggedIn){
		fbContend = (
			<div style = {{width:'400px', margin: 'auto', background : '#CEF6F5', padding:'20px'}}>
			<img src = {picture} alt = {name} />
			<h2> Welcome {name} </h2>
			Email : {email}
			</div>
		);

	}else
		{
			fbContend = (
			<FacebookLogin
    		appId="769991200102738"
    		autoLoad={false}
    		fields="name,email,picture"
    		onClick={componentClicked}
    		callback={responseFacebook} />);
		}




	return(
		<div>{fbContend}
			<h1>{name}</h1>
		</div>
		);
}

export default Book_Login;