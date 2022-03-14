import * as React from 'react';
//import {makeStyles} from '@mui/styles';
import { styled } from '@mui/styles';

const MySideMenu = styled(SideMenu)({
    backgroundColor: 'red',
    height: '100%',
    width: '320px',
    position: 'absolute',
    flexDirection: 'column',
    left: '0px'

  });



export default function SideMenu(){
    
    return(
        <MySideMenu>SideMenu</MySideMenu>
    )
}