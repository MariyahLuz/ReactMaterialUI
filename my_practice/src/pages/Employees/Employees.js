import React from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../components/PageHeader";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {Paper} from '@mui/material';
import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(theme =>({
    pageContent:{
        margin:theme.spacing(5),
        padding:theme.spacing(3)
    }
}))

export default function Employees(){
    const classes =useStyles();
    return(
        <>
        <PageHeader            
            title="New Employee"
            subTitle="Form Design with validation"
            icon={<PeopleAltIcon fontSize="larger" />}
        />
        <Paper className ={classes.pageContent}>
            <EmployeeForm/>
        </Paper>
        </>
    )
    
}