import {Box, Typography, Container} from '@mui/material';
import { createTheme, ThemeProvider} from '@mui/material';

<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet"></link>

const Home = () => {
    const theme = createTheme({
        typography: {
          fontFamily: [
            'DM Serif Display',
            'serif',
          ].join(','),
        }
    })

    return (
        <Container >
            <ThemeProvider theme={theme}>
                <Box paddingY={20}>
                <Typography align='center' fontSize={48}>Welcome to KetoMeals</Typography>
                <Typography align='center' fontSize={20}>Home to 1000s of healthy recipes</Typography>
                </Box>
            </ThemeProvider>
        </Container>
        
     );
}
 
export default Home;