import React, { useEffect, useState } from 'react'
import './Quiz.css'
import {CircularProgress} from '@material-ui/core'
import Question from '../../components/Question/Question'

const Quiz = ({name, score, questions, setScore, setQuestions }) => {
     
    const [options, setOptions] = useState("");
    const[currQues, setCurrQues] = useState(0);

    useEffect(() => {
        console.log(questions);
        setOptions(
            questions && 
            handleShuffle([
                questions[currQues]?.correct_answer,
                ...questions[currQues]?.incorrect_answers,
            ])
        )
    }, [questions, currQues]);

    console.log(options);

    const handleShuffle = (optionss) => {
       return optionss.sort(() => Math.random() - 0.5);
    }

    return (
        <div className='quiz' >
           <span className='subtitle'>Welcome, {" "} {name} </span>

           {
               questions ? (
                   <>
                        <div className='quizInfo'>
                            <span className='score__name'>{questions[currQues].category}</span>
                            <span className='score__name score ' >Score : {score}</span>
                        </div>
                        <Question
                            options={options}
                            currQues ={currQues}
                            setCurrQues={setCurrQues}
                            questions={questions}
                            correct={questions[currQues]?.correct_answer}
                            score={score}
                            setScore={setScore}
                        />
                   </>
               ) : (
                   <CircularProgress
                       style={{margin: 100}}
                       color="inherit"
                       size={150}
                       thickness={2}
                   />
               )
           }
        </div>
    )
}

export default Quiz
