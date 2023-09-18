import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch'
import { Container, Grid, Skeleton, Typography, Box, IconButton, FavoriteBorderIcon, FavoriteIcon} from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setMaxCookTime, setMaxPrepTime, setMaxNetCarbs, setMaxCalories, setMaxSugar, setRandom } from '../filterSlice'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Checkbox from '@mui/material/Checkbox';
import { BorderColorRounded, Padding } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';


const RandomPage = () => {
    const data = useSelector((state) => state.filter.random);
    const [liked, setLiked] = useState(false)
    
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

    const addHandler = (e, Ingredient) => {
        e.preventDefault()
        const newIngredient = {
            id: uuidv4(), 
            name: Ingredient.name,
            servingSize: Ingredient.servingSize,               
          };
        console.log('pressed')
        fetch('http://localhost:8000/ingredients', {
             method: 'POST',
             headers: {'Content-Type': 'application/json'},
             body: JSON.stringify(newIngredient)
        })
    }

    const [checked, setChecked] = useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    return (       
        <Container sx={{paddingTop: '10px'}}>
            
            <Typography component="h1">
                {data.name}
            </Typography>
            <Box sx={{ display: 'flex', maxWidth: 500}}>
                <img src={data.image} alt="" className="img" />
                
            </Box>
            <Box sx = {{display: "flex", marginTop: 5}}>
                <Box sx = {{
                    flex: 1,
                    borderRadius: 2,
                    justifyContent: "center",
                    marginRight: 10,
                    borderColor: 'primary.main',
                    border: 2
                }}>
                <Typography component="h3" align="center">
                    Ingredients
                </Typography>
                <List sx={{width: '100%'}}>
                {data.ingredients.map((item, index) => {

                    const Description = <h4>{item.servingSize.desc} {item.name}</h4>
                    return(
                        <ListItem key={index} disablePadding secondaryAction={
                            <IconButton onClick={(e) => addHandler(e, item)}><AddShoppingCartIcon/></IconButton>
                        }>
                            <ListItemButton>                                       
                                <ListItemText primary= {Description} />            
                            </ListItemButton> 
                        </ListItem>		   		  
                    )      		
                })}
                </List>
                </Box>
                <Box sx = {{
                    border: 2, 
                    flex: 1,
                    borderRadius: 2,
                    justifyContent: "center",
                    borderColor: 'primary.main'
                }}>
                    <Typography component="h3" align="center">
                    Steps
                    </Typography>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {data.steps.map((value, index) => {                
                        const step = index;
                        const labelId = `checkbox-list-secondary-label-${step}`;
                        return (
                        <ListItem
                            key={step}
                            secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(step)}
                                checked={checked.indexOf(step) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                            }
                            disablePadding
                        >
                            <ListItemButton>
                            <ListItemText id={labelId} primary={`${step + 1}. ${value}`} />
                            </ListItemButton>
                        </ListItem>
                        );
                    })}
                    </List>
                </Box>
            </Box>
            <IconButton style={{color: "rgb(255,192,203)"}} 
              onClick={e => {
              e.preventDefault();
              setLiked(!liked)
              {liked ? deleteHandle(e, recipe.id) : addHandle(e, recipe)}
              }}>
              {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
            </IconButton>
        </Container> 
     );
}
 
export default RandomPage;
