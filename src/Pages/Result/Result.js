import { Button } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Result.css'

const Result = ({name, score}) => {
    const history = useHistory();
    useEffect(() => {
        if(!name){
            history.push("/");
        }
    }, [name, history])
    return (
        <div className='result' >
           <div className='headingStyle'>
            <h1 className="heading" >Hey {name} , well done. </h1>
           </div>
           <span className='title' >
             Your Final Score is : {score}
           </span>

           <Button 
                variant='contained' color='secondary' href="/"
                size="large" style={{alignSelf: "center", marginTop: 20}}         
                >
                Play Again !
           </Button>
        </div>
    )
}

export default Result
