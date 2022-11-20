import { useState } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from "../actions/authedUser";
import { useNavigate } from "react-router-dom";

const NotFound = (props) =>
{
    console.log('render NOT FOUND');
   

    return(
         <div>
                <h3 className="center">
                    Page Not Found
                </h3>
                             
        </div>
    )
}


export default (NotFound);

