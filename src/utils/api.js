import authedUser from '../reducers/authedUser.js';
import { _getUsers,_getQuestions,_getLoggedUser, _saveQuestionAnswer, _saveQuestion, _login } from './_DATA.js';


  export function getInitialData ()
  {

	 return Promise.all([
     _getUsers(),
     _getQuestions(),
     _getLoggedUser(),
     ]).then(([users,questions, authedUser]) =>({
       users,
       questions,
       authedUser
     }))
}

export function saveAnswer (info) {  
  return _saveQuestionAnswer(info)
}

export function saveQuestion (info) {
  
  return _saveQuestion(info)
}

export function login(info)
{
  return _login(info);
}