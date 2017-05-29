// all the actions responsible for the login function
import { LOGIN } from './constants';
import { getLoginData, loginWithFacebook } from '../api/login';
import firebase from 'firebase';
import { LoginManager, AccessToken } from 'react-native-fbsdk';

export function fetch_success(data) {
	return {
		type: LOGIN.DATA_FETCH_SUCCESS,
		data
	}
}

export function fetch_failure(data) {
	return {
		type: LOGIN.DATA_FETCH_FAILURE,
		data
	}
}

// to signify the login button has been pressed
export function fetch_data(){
	return {
		type: LOGIN.DATA_FETCH
	}
}

export function typing_username(data){
	return {
		type: LOGIN.TYPE_USERNAME,
		username: data
	}
}

export function typing_password(data){
	return {
		type: LOGIN.TYPE_PASSWORD,
		password: data
	}
}

export function facebook_login(){
	return {
		type: LOGIN.FACEBOOK_LOGIN
	}
}

export function facebook_login_success(data){
	return {
		type: LOGIN.FACEBOOK_LOGIN_SUCCESS,
		authData: data
	}
}

export function facebook_login_failure(data){
	return {
		type: LOGIN.FACEBOOK_LOGIN_FAILURE,
		authData: data
	}
}

export function facebookLoginCall(){
	return (dispatch) => {
		dispatch(facebook_login);

		// for the spinner
		dispatch(fetch_data);
		
		// a lot to do with facebook login canceled and 
		// error handling also needs to be done
		loginWithFacebook(dispatch);
	}
}

export function loginAPICall(userdata){
	return (dispatch) => {
		dispatch(fetch_data());
		getLoginData(userdata);
	}
}

export function is_authenticated(){
	return (dispatch) => {
		dispatch(fetch_data());
		AccessToken.getCurrentAccessToken().then((data) => {
		let credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken.toString());
		firebase.auth().signInWithCredential(credential).then((data) => {
				// dispatch something to change the state
				dispatch(facebook_login_success({
					auth: true,
					data
				}))

			}).catch((error) => {
				
				// dispatch something to change the state 
				dispatch(facebook_login_failure({
					auth: false,
					error
				}));

			})

		}).catch((error) => {
			// dispatch something to change the state
			dispatch(facebook_login_failure({
				auth: false,
				error
			}));

		});		
	}
}

