import * as React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PublishIcon from '@mui/icons-material/Publish';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate} from 'react-router-dom';
import {Box, Paper, Rating, Grid, IconButton, Container} from '@mui/material';
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setMaxCookTime, setMaxPrepTime, setMaxNetCarbs, setMaxCalories, setMaxSugar } from '../filterSlice'
import Slider from '@mui/material/Slider';


const AppDrawer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const maxCookingTime = useSelector((state) => state.filter.maxCookTime);
    const maxPrepareTime = useSelector((state) => state.filter.maxPrepTime);
    const maxNetCarbs = useSelector((state) => state.filter.maxNetCarbs);
    const maxCalories = useSelector((state) => state.filter.maxCalories);
    const maxSugar = useSelector((state) => state.filter.maxSugar);
    const itemsList = [
        {
            text: 'Home',
            icon : <HomeIcon />,
            onClick: () => navigate('/')
        },
        {
            text : 'Liked recipes',
            icon : <FavoriteIcon style={{color: "rgb(255,192,203)"}} />,
            onClick: () => navigate('/LikedRecipes')
        },
        {
            text : 'Submit a recipe',
            icon : <PublishIcon />,
            onClick: () => navigate('/Publish')
        },
        {
            text : 'Shopping list',
            icon : <ShoppingCartIcon />,
            onClick: () => navigate('/ShoppingList')
        }
    ]
    return ( 
        <div>
            <Toolbar />
            <Divider />
            <List>
                {itemsList.map((item, index) => {
                    const {text, icon, onClick} = item;
                    return(
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={onClick}>                    
                            {icon && <ListItemIcon>{icon}</ListItemIcon>}              
                        <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                    );
            })}
            <Divider />
            <Toolbar>
                <Typography sx={{fontWeight: 'bold'}}>Filters:</Typography>
            </Toolbar>
            <Container>
            <Box>
            <Typography>Max Cooking Time: {maxCookingTime} minutes</Typography>
            <Slider
            value={maxCookingTime}
            disabled={false}
            max={100}
            min={0}
            valueLabelDisplay="auto"
            onChange={(event, newValue) => dispatch(setMaxCookTime(newValue))}
            />
            </Box>
            <Box>
            <Typography>Max Preparing Time: {maxPrepareTime} minutes</Typography>
            <Slider
            value={maxPrepareTime}
            disabled={false}
            max={100}
            min={0}
            valueLabelDisplay="auto"
            onChange={(event, newValue) => dispatch(setMaxPrepTime(newValue))}
            />
            </Box>
            <Box>
            <Typography>Max Net Carbs: {maxNetCarbs} grams</Typography>
            <Slider
            value={maxNetCarbs}
            disabled={false}
            max={12}
            min={0}
            valueLabelDisplay="auto"
            onChange={(event, newValue) => dispatch(setMaxNetCarbs(newValue))}
            />
            </Box>
            <Box>
            <Typography>Max Calories: {maxCalories} kcal</Typography>
            <Slider
            value={maxNetCarbs}
            disabled={false}
            max={12}
            min={0}
            valueLabelDisplay="auto"
            onChange={(event, newValue) => dispatch(setMaxCalories(newValue))}
            />
            </Box>
            <Box>
            <Typography>Max Sugar: {maxSugar} grams</Typography>
            <Slider
            value={maxNetCarbs}
            disabled={false}
            max={12}
            min={0}
            valueLabelDisplay="auto"
            onChange={(event, newValue) => dispatch(setMaxSugar(newValue))}
            />
            </Box>
            </Container>
            
            </List>
        </div>
     );
}

 
export default AppDrawer;