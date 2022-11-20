import { Fragment, useState } from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { handleLogin } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

const Navigation = (props) =>
{
    const navigate = useNavigate();
    
    const userId = props.authedUser;


    const renderNav = (user) =>{


        return(
            <div className="center">
                 <div style={{width:'50%'}}>
                     <div  style={{margin:'10px', float:'left'}}>
                         <Link to ='/home'>Home</Link>
                     </div>
                     <div  style={{margin:'10px', float:'left'}}>
                         <Link to ='/leaderboard'>LeaderBoard</Link>
                     </div>
                     <div  style={{margin:'10px', float:'left'}}>
                         <Link to ='/newpoll'>New</Link>
                     </div>
                 </div>
                 <div style={{width:'auto', textAlign:'right', paddingLeft:'30px', overflow:'hidden'}}>
                     <div style={{margin:'10px', marginRight:'20px'}}>
                     <img src={user.avatarURL} style={{width:'50px', height:'auto', borderRadius: '50%'}} />
                     <span>{user.id} &nbsp;</span> 
                     <span onClick = {handleLogout}>logout</span>

                     </div>
                 </div>

            </div>
         )
    }

    const handleLogout = (e) =>
    {

           props.dispatch(handleLogin(null));
            e.preventDefault();
            
           navigate(`/login`)
    
    }

    return(
        <div className="center">
        {
            <Fragment>
            {(userId===null)?<span>You are currently logout.</span> : 
            
                  renderNav( props.users[userId])
            }
            </Fragment>
            
        }
        </div>
    )
    

}

const mapStateProps = ({authedUser,users}) =>
{

    return {
        
        authedUser,
        users
    }
};


export default connect(mapStateProps)(Navigation);

