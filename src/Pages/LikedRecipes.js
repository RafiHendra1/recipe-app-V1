import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Likes from '../Databases/Liked.json'
import { Container, Grid, Skeleton} from '@mui/material';
import { Link } from 'react-router-dom';
import RecipeCard from '../Components/RecipeCard';

const LikedRecipes = () => {
    const [isPending, setLoading] = useState(true)
    setTimeout(() => setLoading(false), 1500);
    return ( 
        <div>
            <h1>Liked Recipes</h1>
        <Container style={{paddingTop: '10px'}}>
            <Grid container spacing = {5} >
                {isPending
                ? Array.from({ length: 12 }).map((_, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <Skeleton width={240} height={400} variant="rectangular"/>
                    </Grid>
                ))
                : Likes.Recipes.map((item) => {
                    return(		
                        <RecipeCard recipe = {item} key = {item.id} like = {true}/>       		  
                    )      		
                })}
            </Grid>  
        </Container>
        </div>
     );
}
 
export default LikedRecipes;