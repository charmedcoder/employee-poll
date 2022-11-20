import {Fragment, useState} from 'react';
import questions from "../reducers/questions";
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleSaveAnswer } from "../actions/questions";
import Card from 'react-bootstrap/Card';
import getPercent from '../helpers/helper'




const Poll = ({dispatch,questions, authedUser, users}) =>
{


    const { id } = useParams();
    const question = questions[id];

    const [option1Votes, setOption1Votes] = useState(question?.optionOne?.votes?.length);
    const [option2Votes, setOption2Votes] = useState(question?.optionTwo?.votes?.length);
   

   const [option1Selected, setOption1Selected] = useState(question?.optionOne.votes.includes(authedUser));
   const [option2Selected, setOption2Selected] = useState(question?.optionTwo.votes.includes(authedUser));
   const [submitted, setSubmitted] = useState((option1Selected || option2Selected)?true:false);


    const navigate = useNavigate();

    const handleOption1Clicked = (text) =>
    {

            if(submitted) return;
            setOption1Selected(!option1Selected);
            setOption2Selected(false);   
            dispatch(handleSaveAnswer(id,text));
            setOption1Votes(option1Votes + 1);
            setSubmitted(true);

      }
    
      const handleOption2Clicked = (text) =>{

        if(submitted) return;
        setOption2Selected(!option2Selected);
        setOption1Selected(false);
        dispatch(handleSaveAnswer(id,text));
        setOption2Votes(option2Votes + 1);
        setSubmitted(true);
        

  }

  const stat = ()=>{

    const total = (option1Votes + option2Votes);

    return(
        <div style={{fontWeight:'bold'}}>
        <div>            
        {getPercent(total, option1Votes)}% ({option1Votes}) participants chose Option 1 
        <br>
        </br>
        {getPercent(total,option2Votes)}% ({option2Votes}) participants chose Option 2
    </div> 
    </div>
    );
  }
//   const getPercent = (total, partial) =>{

// return ((partial/total) * 100)

//   }


  const renderStat = () =>{

    const displayStat = (option1Selected || option2Selected )? true: false;
    



    return(
        
            (displayStat) ? stat() : null

        
    )
  }

    return(
         <div className='float-container'>
            <div className='row' style={{textAlign:'center'}}>
            <div key={id} style={{padding:'50px'}}>
                            <h4>Poll by {questions[id].author}</h4>                    
                                   <div> <img src={users[question.author].avatarURL} style={{width:'250px', height:'auto', borderRadius: '50%'}} /></div>
                                    <h3>Would You Rather?</h3>   
                                    <div className='float-container'>
                                        <div className='row'>
                                        <div className={submitted?'option-selected':'option'} style={option1Selected ? {fontWeight:'bold'}:{}} onClick={()=>handleOption1Clicked('optionOne')}>{question.optionOne.text}</div>
                                   <div className={submitted?'option-selected':'option'} style={option2Selected ? {fontWeight:'bold'}:{}} onClick={()=>handleOption2Clicked('optionTwo')}>{question.optionTwo.text}</div>
                                 
                                        </div>
                                  </div>     
                                    
                </div>
            </div>
            {renderStat()}
        </div>
    )
}


const mapStateProps = ({questions, authedUser, users}) =>
{
    return {
        authedUser,
        questions,
        users
    }
};

export default connect(mapStateProps)(Poll);



