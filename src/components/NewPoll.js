import { useState } from "react";
import questions from "../reducers/questions";
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { handleSaveQuestion } from "../actions/questions";




const NewPoll = ({dispatch,authedUser}) =>
{


const navigate = useNavigate();
  if(authedUser === null)
  {
    
      navigate(`/login`)
      
  }

    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");

    
    

        

    const handleChange1 = (e) => {
        const text = e.target.value;
    
        setOption1(text);
      };

      const handleChange2 = (e) => {
        const text = e.target.value;
    
        setOption2(text);
      };

      const handleSubmit = (e) => {
        e.preventDefault();
    
        dispatch(handleSaveQuestion(option1, option2));
    
        setOption1("");
        setOption2("");

        navigate(`/home`)
              
      };

    return(
         <div className="float-container">


            <div className="center border" style={{flex: '0 0 100%' }}>
            <h3>
                    Would You Rather
                </h3>
                <span style={{fontWeight:'bold'}}>Create Your Own Poll</span>
            </div>

            <div className="break"></div>

                <div className="row" style={{textAlign:'center', width:'100%'}}>  
                <form className="new-tweet" onSubmit={handleSubmit}>
                <label>First Option</label>
                <input type="text" class="form-control" value={option1}  onChange={handleChange1} placeholder="Option 1"/>
                <label>Second Option</label>
                <input type="text" class="form-control"  value={option2} onChange={handleChange2} placeholder="Option 2"/>
                   
                    <div style={{margin:'10px'}}>                  
                    <button className="btn btn-primary" type="submit" disabled={option1 === "" || option2 ===""}>
                    Submit
                    </button>
                      </div>                          
                  
                </form>                  
                </div>
        </div>
    )
}


const mapStateProps = ({authedUser}) =>
{

    return {
        
        authedUser
    }
};

export default connect(mapStateProps)(NewPoll);



