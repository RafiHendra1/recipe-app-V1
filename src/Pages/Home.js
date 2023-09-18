import {Box, Paper, Typography, Rating, Grid, IconButton, Container, CircularProgress} from '@mui/material';
import { createTheme, ThemeProvider, Button } from '@mui/material';
import useFetch from '../useFetch'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setMaxCookTime, setMaxPrepTime, setMaxNetCarbs, setMaxCalories, setMaxSugar, setRandom } from '../filterSlice'
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet"></link>

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const theme = createTheme({
        typography: {
          fontFamily: [
            'DM Serif Display',
            'serif',
          ].join(','),
        }
    })
    
    const RandomHandle = (e) => {
        
        const url = 'https://low-carb-recipes.p.rapidapi.com/random';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2b9f34813dmsh1459521228cda3bp19f5a3jsn515cf9c60be7',
                'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
            }
        }
        const { data, error, isPending } = useFetch(url, options, {blog: 'name'});
        {(event, data) => dispatch(setRandom(data))}
        navigate('/RandomPage/' + data.id)
        console.log('random')
      }

    return (
        <Container>
            <ThemeProvider theme={theme}>
                <div>
                <Typography align='center' fontSize={48}>Welcome to KetoMeals</Typography>
                </div>
            </ThemeProvider>
            <Box sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <Button variant="contained" color="success" onClick={RandomHandle}>
                Get a Random Recipe
            </Button>
            </Box>
        </Container>
        
     );
}
 
export default Home;