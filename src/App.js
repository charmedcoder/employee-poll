
import { useEffect, Fragment } from 'react';
import { handleInitialData } from './actions/shared';
import { connect } from 'react-redux';
import  Home from './components/Home';
import Leaderboard from './components/Leaderboard';
import Navigation from './components/Navigation';
import { Routes,Route, Redirect} from 'react-router-dom';
import Poll from './components/Poll';
import NewPoll from './components/NewPoll';
import Login from './components/Login';
import NotFound from './components/NotFound';

const App = (props) => {
  
  useEffect(()=>{
    props.dispatch(handleInitialData());
  },[]);

   

  const isLoggedIn = (props.authedUser===null)?false:true;


  return (
    <Fragment>
    <div className="App">

      <Navigation/>
      <br></br>
<h1>Employee Polls</h1>
      <Routes>
      {(isLoggedIn===false) ? <Route path ="*" exact={true}  element={<Login/>} /> :   
      <Fragment>
        <Route path ="/home" exact element={<Home/>} />
        <Route path ="/leaderboard" exact element={<Leaderboard/>} />
        <Route path ="/poll/:id" exact element={<Poll/>} />
        <Route path ="/newpoll"  exact element={<NewPoll/>} />
        <Route path ="/"  element={<Login/>} />
        <Route path ="/login"  element={<Login/>} />    
        <Route path =""  element={<NotFound/>} />      
        <Route path='*' exact={true} element={<NotFound/>} />

        </Fragment>
      }
      </Routes>
    
    </div>
    </Fragment>
  );
}

//export default connect()(App);
const mapStateToProps = ({ authedUser }) => ({
  authedUser
});

export default connect(mapStateToProps)(App);
