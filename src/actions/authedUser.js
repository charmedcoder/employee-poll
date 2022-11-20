import authedUser from "../reducers/authedUser";
import { login } from "../utils/api";

export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const RECEIVED_AUTHED_USER = "RECEIVED_AUTHED_USER";

export function receivedAuthedUser(authedUser){
	return {
    	type:RECEIVED_AUTHED_USER,
		authedUser,
    }
}


export function setAuthedUser(authedUser){
	
	return {
    	type:SET_AUTHED_USER,
      	authedUser,
    }
}


export function handleLogin(user){

	
	return (dispatch, getState) => {
	 //  const { authedUser, users, questions } = getState();
   
	   console.log('handleLogin' + user)
	  return login({
		 user
	   })
	   .then((authedUser) => dispatch(setAuthedUser(authedUser)))	   
	 };
   
   }
   

