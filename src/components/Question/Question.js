import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Question.css'

const Question = ({questions, options, currQues, setCurrQues, correct, score, setScore }) => {
    const [selected, setSelected] =useState();
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSelect = (i) => {
        if (selected === i && selected === correct) return "select";
        else if (selected === i && selected !== correct) return "wrong";
        else if (i === correct) return "select";
      };
    
      const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
      };
    
      const handleQuit = () => {
            setScore(0);
            history.push("/");
      }

      const handleNext = () => {
            if(currQues > 8){
                history.push("/result");
            }else if(selected) {
                setCurrQues(currQues + 1);
                setSelected();
            }else {
                setError("Please Select an option first");
            }
      }


    return (
        <div className="question" >
            <h1>Question {" "} {currQues + 1}</h1>
            <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)} btn `}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i} 
             </button>
                        ))
                    }
                </div>
                <div className='controls'>
                    <div className='mui-btn' >
                        <Button  onClick={handleQuit}
                            variant="contained"
                            color="secondary"
                            href="/"
                        >
                            Quit
                        </Button>
                    </div>
                   

                   <div className='mui-btn' >
                    <Button className='mui-btn' onClick={handleNext}
                            variant="contained"
                            color="primary"
                        >
                            Next Question
                        </Button>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Question
