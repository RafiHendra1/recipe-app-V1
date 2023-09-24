import {Box, Paper, Typography, Rating, Grid, IconButton} from '@mui/material';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useState, otherFunction} from "react";
import { Link } from 'react-router-dom';
import '../index.css';

const RecipeCard = ({recipe, like}) => {

    const [liked, setLiked] = useState(like)
    
    const addHandle = (e, recipe) => {
      e.preventDefault()
      fetch('http://localhost:5000/Recipes', {
                 method: 'POST',
                 headers: {'Content-Type': 'application/json'},
                 body: JSON.stringify(recipe)
            })
      console.log('added')
    
          }
    const deleteHandle = (e, id) => {
      e.preventDefault()
        fetch('http://localhost:5000/Recipes/' + id,{
            method: 'DELETE'
        })
        console.log('deleted')
      
    }
    return ( 
      
        <Grid item xs ={4} md={3}>
          <Link className={`links`} to={'/RecipePage/' + recipe.id}>
          <Paper sx={{
            ':hover': {
              backgroundColor: 'rgb(7, 177, 77, 0.42)',
              boxShadow: 20,
            }
          }} elevation={4} className="paper">

            
          <CardMedia
                  component="img"
                  height="194"
                  image={recipe.image}
                  alt={recipe.name}
          />
            <CardContent>
              <Box
                
              >
                <Typography variant="subtitle1" component="h3" fontSize={16} align='center' noWrap={true} sx={{fontWeight: 'bold'}}>
                  {recipe.name}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body2" component="p" marginLeft={0.5}>
                    Prep time: {recipe.prepareTime} minutes
                  </Typography>
                  <Typography variant="body2" component="p" marginLeft={0.5}>
                    Cooking time: {recipe.cookTime} minutes
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <Typography variant="h6" component="h2" marginTop={0}>
                    Servings: {recipe.servings}
                  </Typography>
                </Box>
                <Box sx={{
                  display: "flex"
                }}>
                  <Typography variant="h6" component="h2" marginTop={1}>
                    Calories: {recipe.nutrients.caloriesKCal} kcal
                  </Typography>
                </Box>
              </Box>
            </CardContent>
            <CardActions disableSpacing> 
            <IconButton style={{color: "rgb(255,192,203)"}} 
              onMouseDown={e => e.stopPropagation()}
              onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              setLiked(!liked)
              
              {liked ? deleteHandle(e, recipe.id) : addHandle(e, recipe)}
              }}>
              {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
              
            </IconButton>
            </CardActions>
          </Paper>
          </Link>
        </Grid>
      
    );
}
 
export default RecipeCard;
