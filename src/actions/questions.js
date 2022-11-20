import authedUser from "../reducers/authedUser";
import questions from "../reducers/questions";
import { saveAnswer, saveQuestion } from "../utils/api";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";

export function receiveQuestions(questions){
	return {
    	type:RECEIVE_QUESTIONS,
      	questions,
    }
}


function addAnswer(users,authedUser, answer, qid) {

	let user = users[authedUser];
	user.answers[qid] = answer;
	
	return {
	  type: ADD_ANSWER_USER,	  
	  user
	};

  }

  function addUserToQuestion(users,authedUser, answer, qid, questions) {
	
	let question = questions[qid];

	//clear user before adding 
	 const index1 = question.optionOne.votes.indexOf(authedUser);	
	 if(index1>0)
	 {
		question.optionOne.votes.splice(index1,1);
	 }
	
	const index2 = question.optionTwo.votes.indexOf(authedUser);
	if(index2>0)
	{
		question.optionTwo.votes.splice(index2,1);
	}	


	//prevent duplicate entry
	if(!question[answer].votes.includes(authedUser))
	{
		question[answer].votes.push(authedUser);
	}
	

	return {
		type: ADD_USER_QUESTION,	  
		question
	  };
  }


export function handleSaveAnswer(qid,answer){

 return (dispatch, getState) => {
    const { authedUser, users, questions } = getState();

	console.log('handleSaveAnswer' + qid + "-" + answer)
   return saveAnswer({
      authedUser,
      qid,
      answer
    })
    .then(() => dispatch(addAnswer(users,authedUser, answer, qid)))
	.then(() => dispatch(addUserToQuestion(users,authedUser, answer, qid, questions)))
  };

}



function addQuestion(question,user) 
{
	const userQs = [...user.questions,question.id];
	user.questions = userQs;

	return {
	  type: ADD_QUESTION,
	  question,
	  user
	};
  }



export function handleSaveQuestion(optionOneText,optionTwoText){

	return (dispatch, getState) => {
	   const { authedUser, users } = getState();
   
	   let user = users[authedUser];

	  return saveQuestion({
		optionOneText,
		optionTwoText,
		 author:authedUser
	   })
		.then((question) => dispatch(addQuestion(question, user)))
	 };
   
   }