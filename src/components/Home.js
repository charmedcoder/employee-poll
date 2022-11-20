import { useState } from "react";
 import questions from "../reducers/questions";
import { connect } from 'react-redux';
import Question from "./Question";
import Poll from "./Poll";
import { Link, useNavigate } from "react-router-dom";
import authedUser from "../reducers/authedUser";
import Card from 'react-bootstrap/Card';


const Home = ({questionIds,questions,authedUser,answered}) =>
{
    const navigate = useNavigate();
   
    const formatTS = (ts) =>
    {

        return new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(ts)

    }


    const handleShow = (id) =>{
        
        navigate(`/poll/${id}`)

    }





    return(
         <div className="float-container">
            <div className="center border" style={{flex: '0 0 100%' }}>
            <h3>
                    New Questions 
                </h3>
            </div>

              <div className="break"></div>
                <div className="row">
                    {                                


                        questionIds.filter(id => answered.includes(id) == false).map(id => {
                            return(

                                <Card body key={id}  style={{padding:'20px', width:'300px',margin:'20px', border:'1px solid green'}}>
                                <div>{questions[id].author}</div>                    
                                        <div>{formatTS(questions[id].timestamp)}</div>        
                                        <input type="submit" value="Show" onClick={()=>handleShow(id)}/>      
                                    </Card>
                          
                            )

                    })
                  
                }

</div>

<div className="center border" style={{flex: '0 0 100%' }}>
            <h3>
                    Done
                </h3>
            </div>
            <div className="break"></div>
                <div className="row">
                {

                    questionIds.filter(id => answered.includes(id)).map(id => {
                        return(
                            <Card body key={id}  style={{padding:'20px', width:'300px',margin:'20px', border:'1px solid orange'}}>
                            <div>{questions[id].author}</div>                    
                                    <div>{formatTS(questions[id].timestamp)}</div>        
                                    <input type="submit" value="Show" onClick={()=>handleShow(id)}/>      
                                </Card>
    )

})
} </div>

              
        </div>
    )
}

const mapStateProps = ({questions, authedUser,users}) => {
       
    
    return {

        questionIds: Object.keys(questions).sort(
            (a,b) => questions[b].timestamp - questions[a].timestamp
        
        ), 
        questions,
        authedUser,
        users,
        answered : Object.keys(users[authedUser].answers)
        
    }
}


export default connect(mapStateProps)(Home);

