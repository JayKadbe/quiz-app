import { Button, MenuItem, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import Categories from '../../Data/Categories'
import './Home.css'

const Home = ({name, setName, fetchQuestions}) => {
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [error, setError] = useState(false)
    
    const history = useHistory();

    const handleSubmit = () => {
       if(!category || !difficulty){
           setError(true);
           return;  
       }else {
         setError(false);
         fetchQuestions(category, difficulty);
         history.push('/quiz');
       }
    }

    return (
        <div className='content' >
            <div className='settings' >
                <span style={{fontSize : 30}} >Quiz Settings</span>
                <div className='settings__select'>
                 {error && <ErrorMessage>Plese fill all the fields</ErrorMessage>}
                <TextField
                   label="Enter your Name" variant="outlined"
                   style={{marginBottom: 25}}
                   onChange={(e) => setName(e.target.value)}
                />

                <TextField
                    select  label="Select Category"
                    variant="outlined" style={{marginBottom: 30}}
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                    >
                    {
                       Categories.map((cat) => (
                            <MenuItem
                                key={cat.category} value={cat.value}
                            >
                                {cat.category}
                            </MenuItem>
                       ))
                    }
                </TextField>

                <TextField
                    select label ="Select Difficulty"
                    variant="outlined" style={{marginBottom: 30 }}
                    onChange={(e) => setDifficulty(e.target.value)}
                    value={difficulty}
                   >
                    <MenuItem key="easy" value="easy" >
                        Easy
                    </MenuItem>
                    <MenuItem key="medium" value="medium" >
                        Medium
                    </MenuItem>
                    <MenuItem key="hard" value="hard" >
                        Hard
                    </MenuItem>
                </TextField>

                <Button variant="contained" 
                color="primary" 
                size="large" onClick={handleSubmit} >
                    Start Quiz
                </Button>

            </div>
            </div>

            <img src='/quiz.svg' className='banner' alt='quizimage'/>
        </div>
    )
} 

export default Home
