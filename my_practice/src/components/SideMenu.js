import  React from 'react';
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    styles:{
        backgroundColor: '#253053',
        height: '100%',
        width: '320px',
        position: 'absolute',
        flexDirection: 'column',
        left: '0px',
        display: 'flex'

    }
})


export default function SideMenu(){
    const classes = useStyles();
    
    return(
        <div className={classes.styles}>

        </div>
    )
}