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
    
    // const data = 
    //     {
    //     "id": "2807982c-986a-4def-9e3a-153a3066af7a",
    //     "name": "Ultimate Keto Blueberry Sponge Cake In A Mug",
    //     "tags": [
    //         "15-minute-meals",
    //         "beef-free",
    //         "breakfast",
    //         "chicken-free",
    //         "dairy-free",
    //         "desserts",
    //         "eggs",
    //         "fish-free",
    //         "gluten-free",
    //         "keto",
    //         "kid-friendly",
    //         "low-carb",
    //         "one-pot-meals",
    //         "peanut-free",
    //         "pescatarian",
    //         "pork-free",
    //         "quick-easy",
    //         "shellfish-free",
    //         "snacks",
    //         "soy-free",
    //         "tree-nut-free",
    //         "vegetarian",
    //         "wheat-free"
    //     ],
    //     "description": "Instead of making pancakes or waffles, make this easy Keto breakfast recipe that takes way less time to make. This blueberry sponge cake in a mug is soft and fluffy like a pancake but sweet like a cake. Don’t worry, you won’t be adding many carbs to your breakfast, as all sweetening products are replaced with Keto-friendly ingredients. You can assemble the recipe in under 5 minutes, so this is also a great Keto breakfast recipe for anyone who always ends up in a rush in the mornings. Even if you’re in a rush, you can still enjoy this sweet and delicious sponge cake breakfast! If you want to serve your sponge cake with a little whipped cream, you can whip heavy cream and liquid stevia together in a stand mixer or food processor.\n\n### Other ingredients to add\n\nLike to have a little more in your sponge cake? Try stirring in crushed nuts for more texture. Keto-friendly nuts include cashews, walnuts, pecan, hazelnuts, and even peanuts. Blueberries also happen to taste very good with lemon. Try mixing a little lemon zest in your dry ingredients!\n\n### Can other berries be used?\n\nBlueberries are one of the most Keto-friendly berries out there. If you don’t like blueberries, try raspberries or strawberries. If you’re using strawberries in the mug cake, make sure to chop them finely.\n\n### What type of mug should I use?\n\nA heat-safe mug or dish can easily be a coffee cup from your kitchen. Choose any type of ceramic mug to keep your hands safe as well as cook the sponge cake. If you own a ceramic ramekin, you can also cook your sponge cake in there.",
    //     "prepareTime": 3,
    //     "cookTime": 2,
    //     "ingredients": [
    //         {
    //         "name": "Butter",
    //         "servingSize": {
    //             "units": "tablespoon",
    //             "desc": "1 tablespoon",
    //             "qty": 1,
    //             "grams": 14,
    //             "scale": 1
    //         }
    //         },
    //         {
    //         "name": "Cream Cheese",
    //         "servingSize": {
    //             "units": "tablespoon",
    //             "desc": "2 tablespoon",
    //             "qty": 2,
    //             "grams": 29,
    //             "scale": 2
    //         }
    //         },
    //         {
    //         "name": "Coconut Flour",
    //         "servingSize": {
    //             "units": "tablespoon",
    //             "desc": "2 tablespoon",
    //             "qty": 2,
    //             "grams": 14,
    //             "scale": 0.125
    //         }
    //         },
    //         {
    //         "name": "The Ultimate Sugar Replacement Granular by Swerve",
    //         "servingSize": {
    //             "units": "tablespoon",
    //             "desc": "1 tablespoon",
    //             "qty": 1,
    //             "scale": 3
    //         }
    //         },
    //         {
    //         "name": "Vanilla Extract",
    //         "servingSize": {
    //             "units": "teaspoon",
    //             "desc": "1 teaspoon",
    //             "qty": 1,
    //             "grams": 4,
    //             "scale": 1
    //         }
    //         },
    //         {
    //         "name": "Baking Powder",
    //         "servingSize": {
    //             "units": "teaspoon",
    //             "desc": "¼ teaspoon",
    //             "qty": 0.25,
    //             "scale": 0.25
    //         }
    //         },
    //         {
    //         "name": "Raw Egg",
    //         "servingSize": {
    //             "units": "large",
    //             "desc": "1 large",
    //             "qty": 1,
    //             "grams": 50,
    //             "scale": 1
    //         }
    //         },
    //         {
    //         "name": "Blueberries, Frozen, Unsweetened",
    //         "servingSize": {
    //             "units": "tablespoon",
    //             "desc": "1-½ tablespoon",
    //             "qty": 1.5,
    //             "grams": 22,
    //             "scale": 0.094
    //         }
    //         }
    //     ],
    //     "steps": [
    //         "Combine the butter and cream cheese together in a heat-safe container. Microwave the ingredients on high heat for 20 seconds until they’re melted. Stir the butter and cream cheese together into one mixture.",
    //         "Combine the butter and cream cheese mixture with coconut flour, brown sugar substitute, and vanilla extract in the heat-safe dish. You may also wish to add a small pinch of salt. If necessary, you can mix the ingredients in a separate mixing bowl before adding it to your heat-safe dish or mug.",
    //         "Mix the egg into the batter. Follow by folding the blueberries into the batter. It may help you to freeze the blueberries beforehand so they don’t break up and bleed in the batter.",
    //         "Microwave your mug of batter on high heat for 1 minute. The cake should puff considerably! Serve with whipped cream if desired."
    //     ],
    //     "servings": 2,
    //     "servingSizes": [
    //         {
    //         "scale": 1,
    //         "qty": 1,
    //         "grams": 100,
    //         "units": "servings",
    //         "originalWeight": 100,
    //         "originalWeightUnits": "g"
    //         }
    //     ],
    //     "nutrients": {
    //         "caloriesKCal": 185.437,
    //         "caloriesKJ": 763.317,
    //         "totalCarbs": 12.83,
    //         "diabetesCarbsADA": 9.83,
    //         "netCarbs": 4.032,
    //         "diabetesCarbs": 4.035,
    //         "fiber": 2.792,
    //         "starch": 1.213,
    //         "sugar": 2.514,
    //         "addedSugar": 0,
    //         "sugarAlcohols": 6.006,
    //         "protein": 5.145,
    //         "fat": 14.471,
    //         "transFat": 0.403,
    //         "monousatFat": 3.811,
    //         "polyunsatFat": 0.815,
    //         "omega3Fat": 0.075,
    //         "omega6Fat": 0.74,
    //         "saturatedFat": 8.398,
    //         "cholesterol": 123.147,
    //         "vitaminA": 130.784,
    //         "vitaminC": 0.27,
    //         "vitaminD": 0.562,
    //         "vitaminE": 0.605,
    //         "vitaminK": 2.651,
    //         "vitaminB1": 0.028,
    //         "vitaminB2": 0.177,
    //         "vitaminB3": 0.137,
    //         "vitaminB5": 0.498,
    //         "vitaminB6": 0.064,
    //         "vitaminB12": 0.322,
    //         "potassium": 96.907,
    //         "magnesium": 10.781,
    //         "calcium": 63.155,
    //         "iron": 0.49,
    //         "zinc": 0.482,
    //         "copper": 0.064,
    //         "phosphorus": 87.572,
    //         "sodium": 198.378,
    //         "selenium": 10.234,
    //         "folate": 13.833,
    //         "choline": 80.661,
    //         "alcohol": 0.746,
    //         "caffeine": 0,
    //         "gluten": 0,
    //         "manganese": 0.207,
    //         "conjugatedLinoleicAcid": 0.038,
    //         "phyticAcid": 74.205,
    //         "xylitol": 0,
    //         "isomalt": 0,
    //         "sorbitol": 0,
    //         "maltitol": 0,
    //         "lactitol": 0,
    //         "erythritol": 0,
    //         "pinitol": 0,
    //         "inositol": 0.006,
    //         "mannitol": 0
    //     },
    //     "image": "https://tinyurl.com/2p82zzca/2807982c-986a-4def-9e3a-153a3066af7a.png"
    //     }

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