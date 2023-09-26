import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {Box, Paper, Typography, IconButton, Container, Tooltip} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Checkbox from '@mui/material/Checkbox';
import useFetch from '../useFetch'
import { v4 as uuidv4 } from 'uuid';

const RecipePage = () => {
    const [details, setDetails] = useState({})
    let params = useParams();
    const url = `https://low-carb-recipes.p.rapidapi.com/recipes/${params.id}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2b9f34813dmsh1459521228cda3bp19f5a3jsn515cf9c60be7',
		'X-RapidAPI-Host': 'low-carb-recipes.p.rapidapi.com'
	}
    };

    const { data, error, isPending } = useFetch(url, options, params.id); 
    

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
            
            <Box sx ={{display: "flex", marginTop: 5}}>
                <Box sx={{flex: 1, textAlign: "center", marginRight: 2}}>
                    <img src={data && data.image} alt="" className="img" height={250}/>
                </Box>
                <Box sx={{flex: 1}}>
                    <Typography component="h1" fontSize={48} fontWeight="bold">
                        {data && data.name}
                    </Typography>
                </Box>
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
                {data && data.ingredients.map((item, index) => {

                    const Description = <h4>{item.servingSize.desc} {item.name}</h4>
                    return(
                        <ListItem key={index} disablePadding secondaryAction={
                            <Tooltip title="Add ingredient to shopping list">
                            <IconButton onClick={(e) => addHandler(e, item)}><AddShoppingCartIcon/></IconButton>
                            </Tooltip>
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
                    {data && data.steps.map((value, index) => {                
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
        </Container> 
     );
}
 
export default RecipePage;