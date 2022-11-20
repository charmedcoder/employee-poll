import { useState } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

const Login = (props) =>
{
    
    const navigate = useNavigate();

    const users = props.users;
    const userIds = props.userIds;

    const [userId, setUserId] = useState('');
   // const [pw, setPw] = useState('');

    const handleOnChange = (e) =>
    {
        const id = e.target.value;
        setUserId(id);
       // setPw(users[id].password)
    }

    const handleOnSubmit = (e) =>
    {
       props.dispatch(handleLogin(userId));
        e.preventDefault();
        
        navigate(`/home`);

    }

    return(
         <div className='float-container'>
            <div>
            <h3 className="center">
                    Login
                </h3>
            </div>

<div style={{ justifyContent:'center'}}>
<form onSubmit={handleOnSubmit}>
                    <div style={{display:'flex', padding:'10px', width:'50%', justifyContent:'center', marginLeft:'auto', marginRight:'auto'}}>
                <select onChange={handleOnChange} defaultValue={'DEFAULT'} className='dropdown' style={{ width:'500px'}}>
                <option value="DEFAULT" disabled>Select User</option>       
                {
                    
                         userIds.map((id)=>(
                           <option value={id} key={id}>{id}</option>                 
                    ))
                }
                </select>
                &nbsp;
                <input type="submit" value="Submit" onSubmit={handleOnSubmit}/>
                </div>
    
                {/* <input type="password" value={'pw'}/> */}
                </form>
</div>


                
            
        </div>
    )
}

const mapStateProps = ({users}) => {

    console.log(users);

       return {

        userIds: Object.keys(users),

        users
       }
        
    }
;


export default connect(mapStateProps)(Login);
//export default Dashboard;

