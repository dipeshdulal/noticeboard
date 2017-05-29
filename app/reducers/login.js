import { LOGIN } from '../actions/constants';
import { isAuthorized } from '../api/login';

// initial state of the login screen
const initialState = {
	serverResponse: {},
	sending: false,
	received: false,
	error: false,
	username: "",
	password: "",
	authData: {
		auth: false
	}
}

// login reducers -> to handle login
export default function login(state = initialState, action){
	switch(action.type){
		case LOGIN.DATA_FETCH:
			return {
				...state,
				sending: true
			}
		case LOGIN.DATA_FETCH_SUCCESS:
			return {
				...state,
				serverResponse: action.data,
				received: true,
				sending: false
			}
		case LOGIN.DATA_FETCH_FAILURE:
			return {
				...state,
				serverResponse: action.data,
				received: true,
				error: true
			}
		case LOGIN.TYPE_USERNAME:
			return {
				...state,
				username: action.username
			}
		case LOGIN.TYPE_PASSWORD:
			return {
				...state,
				password: action.password
			}
		case LOGIN.FACEBOOK_LOGIN_SUCCESS: {
			return {
				...state,
				authData: action.authData
			}
		}
		case LOGIN.FACEBOOK_LOGIN_FAILURE: {
			return {
				...state,
				authData: action.authData,
				sending: false
			}
		}
		default:
			return state;


	}
}