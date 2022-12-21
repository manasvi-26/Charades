import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';


import myData from './database.json';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { IconButton } from '@mui/material';
import { useNavigate } from "react-router-dom";


import { Typography } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'lightgrey',
  ...theme.typography.body2,
  padding: theme.spacing(0.1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Home() {
    const navigate = useNavigate();

    const showWord = async(newWord) => {
        console.log(newWord)
        navigate('/description' , {state: {word:newWord, data:myData[newWord]}})
    }

    return (
        <div>
        <h1 style={{textAlign: "center"}}>Charades Database</h1>
        <br/>
        <br/>

        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 6, sm: 6, md: 20 }}>
            {Object.keys(myData).map((curr_word, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
                <Item>
                <IconButton onClick={() => showWord(curr_word)}>
                    <h5>{curr_word}</h5>
                </IconButton>
                </Item>
            </Grid>
            ))}
        </Grid>
        </Box>
        </div>
    );
}