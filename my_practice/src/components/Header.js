import React from 'react';
import { AppBar , Toolbar, Grid, InputBase, IconButton, Badge} from '@mui/material';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import ChatIcon from '@mui/icons-material/Chat';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from '@mui/styles';
import InputAdornment from '@mui/material/InputAdornment';

const useStyles = makeStyles({
    root:{
        backgroundColor: '#fff',
        transform:'translateZ(0)'  
    },
    searchInput:{
        opacity: '0.6',
        padding: '0px 8px',
        fontSize: '0.8rem',

        '&:hover':{
            backgroundColor: '#f2f2f2'

        }
    },

})

export default function Header() {
    const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
        
        <Toolbar>
            <Grid container alignItems='center'>
                <Grid item>
                <InputBase
                    placeholder ="Search here"
                    className={classes.searchInput}
                    startAdornment = {
                        <InputAdornment position="start">
                          <SearchIcon/>
                        </InputAdornment>
                    }/>
                    
                </Grid>
                <Grid item sm></Grid>
                <Grid item>
                    <IconButton>
                        <Badge badgeContent={5} color="warning">
                        <NotificationAddIcon fontSize="small"/>
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <Badge badgeContent={4} color="primary"> 
                        <ChatIcon fontSize="small"/>
                        </Badge>
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon fontSize="small"/>
                    </IconButton>

                </Grid>
            </Grid>
        </Toolbar>
    

    
    </AppBar>
  )
}



