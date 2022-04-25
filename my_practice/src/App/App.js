import React from 'react';
import './App.css';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import {makeStyles, ThemeProvider} from '@mui/styles';
import { CssBaseline, createTheme } from '@mui/material';
import Employees from "../pages/Employees/Employees"

const theme = createTheme({
  palette:{
    primary:{
      main: "#333996",
      light: '#3c44b126'
    },
    warning:{
      main: "#f83245",
      light: "#f8324526"
    },
     background:{
       default:"f4f5dfd"
     },
  },
  shape:{
    borderRadius: '30px'
  },
  props:{
    MuiIconButton:{
      disableRipple: true
    }

  }
    

})

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%'
  }
})

export default function App() {
  const classes = useStyles();
  return(
    <ThemeProvider theme={theme}>
      <SideMenu/>
      <div className={classes.appMain}>
      <Header/>
       <Employees/>
      </div>
      <CssBaseline/>
    </ThemeProvider>
      

    
  );
  
}


