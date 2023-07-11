import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { makeStyles } from '@mui/styles';
import { Search, Tv, Whatshot } from '@mui/icons-material';


const useStyles = makeStyles({
    root:{
        width: 500,
        position: "fixed",
        bottom: 0,
        background:"#39445a",
        zIndex:100,
    },
});

export default function SimpleBottomNavigation() {
    const classes = useStyles();
  const [value, setValue] = React.useState(0);
 
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        className={classes.root} style={{ color: 'white', backgroundColor: '#39445a' }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        >
        <BottomNavigationAction
        style={{color: "white"}} 
        label="Trending" 
        icon={<Whatshot/>} />

        <BottomNavigationAction
        style={{color: "white"}} 
         label="Movies"
          icon={<FavoriteIcon />} />

        <BottomNavigationAction style={{color: "white"}} 
        label="Tv Series" 
        icon={<Tv />} />


<BottomNavigationAction style={{color: "white"}} 
        label="Search" 
        icon={<Search />} />
      
      </BottomNavigation>

     
    </Box>
  );
}