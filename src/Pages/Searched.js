import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch'
import { Container, Grid, Skeleton} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setMaxCookTime, setMaxPrepTime, setMaxNetCarbs, setMaxCalories, setMaxSugar } from '../filterSlice'
import RecipeCard from '../Components/RecipeCard';

const Searched = () => {
    
    let params = useParams();
    
    const Cook = useSelector((state) => state.filter.maxCookTime);
    const Prepare = useSelector((state) => state.filter.maxPrepTime);
    const Carbs = useSelector((state) => state.filter.maxNetCarbs);
    const Calories = useSelector((state) => state.filter.maxCalories);
    const Sugar = useSelector((state) => state.filter.maxSugar);
    const url = `https://low-carb-recipes.p.rapidapi.com/search?name=${params.search}
    &maxPrepareTime=${Prepare}
    &maxCookTime=${Cook}
    &maxCalories=${Calories}
    &maxNetCarbs=${Carbs}
    &maxSugar=${Sugar}
    &limit=12`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b9f34813dmsh1459521228cda3bp19f5a3jsn515cf9c60be7',
		'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
	    }
    };
    const { data, error, isPending } = useFetch(url, options, params.search);  
    
    return (  
        <div>
        <Container style={{paddingTop: '80px'}}>
            <Grid container spacing = {5} >
                {isPending
                ? Array.from({ length: 12 }).map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Skeleton width={240} height={400} variant="rectangular"/>
                    </Grid>
                ))
                : data.map((item) => (
                    <RecipeCard recipe={item} key={item.id} liked={false} />
                    
                ))}

            </Grid>  
        </Container>
        </div>
    );
}
 
export default Searched;