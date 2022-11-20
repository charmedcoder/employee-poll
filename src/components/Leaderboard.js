import { useState } from "react";
import questions from "../reducers/questions";
import { connect } from 'react-redux';
import Question from "./Question";
import Poll from "./Poll";

const Leaderboard = ({users,userIds}) =>
{
    return(
         <div style={{textAlign:"center"}}>
                <h3 className="center">
                    Leader Board
                </h3>
    

<table class="table" style={{width:'75%', marginLeft:'auto', marginRight:'auto'}}>
  <thead>
    <tr>
      <th scope="col">Users</th>
      <th scope="col">Answered</th>
      <th scope="col">Created</th>
    </tr>
  </thead>
  <tbody>
  {

userIds.map((id) =>(
    <tr key={id}>
        <td>
            <div>
                <div>
                <img src={users[id].avatarURL} style={{width:'50px', height:'auto', borderRadius: '50%'}} />
                </div>
                <div>
                {users[id].name}
                <br></br>
                {id}
                </div>

            </div>
</td>                    
        <td>{Object.keys(users[id].answers).length}</td>      
        <td>{users[id].questions.length}</td>      
    </tr>
)
)
} </tbody>
</table> 
         
</div>

              
    )
}

const mapStateProps = ({users}) => {


       return {

        userIds: Object.keys(users).sort(
            (a,b) => Object.keys(users[b].answers).length - Object.keys(users[a].answers).length
        ),
        users
       }
        
    }
;


export default connect(mapStateProps)(Leaderboard);


