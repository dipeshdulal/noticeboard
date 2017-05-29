// login js and all the related things from the api
// use the firebase api for things

import firebase from 'firebase';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { facebook_login_success, facebook_login_failure } from 'react-native-fbsdk'; 
export function getLoginData(userdata){
	console.log("API", userdata);
}

export function loginWithFacebook(dispatch){
	LoginManager.logInWithReadPermissions(['public_profile'])
	.then(loginResult => {
		if (loginResult.isCancelled) {
			console.log('user canceled');
			return;
		}
		AccessToken.getCurrentAccessToken().then((data) => {
			let credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken.toString());
			firebase.auth().signInWithCredential(credential).then((data) => {
				dispatch(facebook_login_success({
					auth: true,
					data
				}))
			}).catch((error) => {
				dispatch(facebook_login_failure({
					auth: false,
					error
				}));
			})
				
		}).catch((error) => {
			dispatch(facebook_login_failure({
					auth: false,
					error
				}));
		})	
	});
}

