import questions from "../reducers/questions";
import { connect } from 'react-redux';


const Question = (props) =>
{

    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(props.question.timestamp)

    console.log('props from question ' +  JSON.stringify(props));
    return(
         <div>
                <h3 className = "center">
                    {props.question.author}
                </h3>
                <div>
                    {date}
                </div>
                <div>Show</div>
        </div>
    )
}


const mapStateProps = ({questions},{id}) =>
{
    const question = questions[id];

    return {
        
        question,
    }
};

export default connect(mapStateProps)(Question);

