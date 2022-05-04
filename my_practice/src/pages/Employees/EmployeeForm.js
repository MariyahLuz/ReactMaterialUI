// import React , {useState, useEfftect} from "react";
import { Grid} from "@mui/material";
import { Controls } from "../../components/controls/Controls";
import {useForm, Form} from '../../components/useForm';
import * as employeeService from "../../services/employeeService"

const genderItems =[
    {id: 'male', title: 'Male'},
    {id: 'female', title: 'Female'},
    {id: 'Prefer not to say', title: 'Prefer not to say'},
]

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
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                    />

                    <Controls.Input
                        label="Email"
                        value={values.email}
                        name="email"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items ={genderItems}
                    />

                    <Controls.Select
                        name="departmentId"
                        label="Department"
                        value={values.departmentId}
                        onChange={handleInputChange}
                        options={employeeService.getDepartmentCollection()}
                    />
     
                </Grid>
            </Grid>
        </Form>
    )

    
}

