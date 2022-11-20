import { getInitialData, login } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { receivedAuthedUser } from "./authedUser";
import {setAuthedUser} from "./authedUser";



const AUTHED_ID = "tylermcginnis";

export function handleInitialData()
{
	
	return (dispatch) => 
    {
    	return getInitialData().then(({users, questions,authedUser})=>{
        	dispatch(receiveUsers(users));
          	dispatch(receiveQuestions(questions));
          	dispatch(receivedAuthedUser(AUTHED_ID));        
    	})
    }
}
