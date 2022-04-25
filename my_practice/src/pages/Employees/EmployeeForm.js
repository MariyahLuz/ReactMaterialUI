// import React , {useState, useEfftect} from "react";
import { Grid, TextField, RadioGroup, FormControl, FormLabel, FormControlLabel, Radio } from "@mui/material";
// import {makeStyles} from '@mui/styles'
import {useForm, Form} from '../../components/useForm';


const initialFValues ={
    id: 0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'female',
    departmentId:'',
    hireDate:new Date(),
    isPermanent: false,
}

export default function EmployeeForm()  {

    const{
        values,
        setValues,
        handleInputChange
    } = useForm(initialFValues);

    

    return(
        <Form>
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="Full Name"
                        name="fullName"
                        value={values.fullName}
                        onChange={handleInputChange}
                   />
                    <TextField
                        variant="outlined"
                        label="Email"
                        value={values.email}
                        name="email"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Gender</FormLabel>
                        <RadioGroup row
                        name="gender"
                        value={values.gender}
                        onChange={handleInputChange}>
                            <FormControlLabel value="male" control={<Radio/>} label ="Male"/>
                            <FormControlLabel value="female" control={<Radio/>} label ="Female"/>
                            <FormControlLabel value="others" control={<Radio/>} label ="Prefer not to say"/>
                        </RadioGroup>  
                    </FormControl>


                    

                </Grid>
            </Grid>
        </Form>
    )

    
}

