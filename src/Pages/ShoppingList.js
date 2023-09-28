import Ingredients from '../Databases/Ingredients.json'
import {Box, Paper, Typography, Rating, Grid, IconButton, Container, CircularProgress} from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import {useState, useEffect} from 'react'
import useFetch from '../useFetch';

const ShoppingList = () => {
    const [loading, setLoading] = useState(null)
    const deleteHandle = async (e, id) => {
        e.preventDefault()
        setLoading(id)
        try {
            
            const response = await fetch('/api/ingredients/' + id, {
              method: 'DELETE',
            });
            if (response.ok) {
              console.log('deleted');
            } else {
              console.error('Failed to delete the item.');
            }
          } catch (error) {
            console.error('Error while deleting the item:', error);
          } finally {
            setTimeout(() => setLoading(null), 1500);
          }
        
    }
    const { data, error, isPending } = useFetch('/api/ingredients')
    return ( 
        <Container>
        <Typography component="h1" align='center' gutterBottom = {true}>
            Shopping List
        </Typography>
        <List>
        {data && data.map((item) => {
            const Description = <h4>{item.servingSize.desc} {item.name}</h4>
            return(
                <ListItem key={item.id} disablePadding secondaryAction={
                    loading === item.id ? <CircularProgress/> : 
                    (<Tooltip title="delete">
                      <IconButton onClick={(e) => deleteHandle(e, item.id)}>
                        <DeleteIcon/>
                      </IconButton>
                    </Tooltip>)}
                >
                    <ListItemButton>                                       
                        <ListItemText primary = {Description} />            
                    </ListItemButton> 
                </ListItem>	
            	   		  
            )      		
        })}
        </List>
        </Container>
     );
}
 
export default ShoppingList;