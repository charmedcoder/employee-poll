import { RECEIVE_QUESTIONS, ADD_ANSWER, ADD_QUESTION } from "../actions/questions";
//import authedUser from "./authedUser";

export default function questions(state = {}, action){

  console.log('reducer')


  switch(action.type)
  {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      }

    case ADD_QUESTION:

       return {
            ...state,
            [action.question.id]: action.question,
          }        
    default:
      return state;
  }
}