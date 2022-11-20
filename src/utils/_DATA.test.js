var {_saveQuestion, _saveQuestionAnswer} = require('./_DATA');

//import {_saveQuestion} from './_DATA'


describe('_saveQuestion',  () => {
    it('will return the saved question', async () => {
        var question = {"optionOneText":"eat","optionTwoText":"sleep","author":"sarahedo"}
        ;

        var result = await _saveQuestion(question);
        expect('sarahedo').toEqual(result.author);
    });

    it('will return an error if  missing param', async() => {
        var question = {"optionOneText":"eat","optionTwoText":"sleep","author":""}
        await expect(_saveQuestion(question)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
    });

});

describe('_saveQuestionAnswer',  () => {
    it('will return the saved answer', async () => {
        var answer = {"authedUser":"sarahedo","qid":"xj352vofupe1dqz9emx13r","answer":"optionOne"};
        
        var result = await _saveQuestionAnswer(answer);
        expect(true).toBe(result);
    });

//     it('will return an error if  missing param', async() => {
//         var answer = {"authedUser":'',"qid":"xj352vofupe1dqz9emx13r","answer":""};
//  var result =await _saveQuestionAnswer(answer); 
//          expect(result).resolves.toEqual('undefined');
//     });

});


//An async unit test to verify that the saved question is returned and all expected fields are populated when correctly formatted data is passed to the function.
//An async unit test to verify that an error is returned if incorrect data is passed to the function.