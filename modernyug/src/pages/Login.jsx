import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {useNavigate} from "react-router-dom"


const Login = ({ handleChange }) => {
// Styles
  const paperStyle = { padding: 20, height: '45vh', width: 300, margin: "0 auto" };
  const btnstyle = { margin: '8px 0', backgroundColor: 'black', color:'white'};
  const forgetPass = { color : "black", fontSize:"14px"}
  
  const gridStyle = { boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px"}

//States
  const navigate = useNavigate();
  const [ formData, setForm ] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { id, value } = e.target;

    setForm({
      ...formData,
      [ id ]: value,
    });
  };

  const handleSubmit =async (e) => {
    if (formData.email === "" || formData.password === "") {
      return;
    }
    e.preventDefault();
    let res=await fetch("https://farfetch-backend.vercel.app/register")
    let data=await res.json()

if (formData.email === "" || formData.password === "") {
  return;
}

    let filtered= data.filter((el)=>{
        return el.email===formData.email && el.password==formData.password
     })
  
     if(filtered.length>0){
       alert("login successfull...1")
       window.location.href="/"
     }
     else{
        alert("Login Failed")
}
 
  }

  return (
    <Grid  style={gridStyle}>
      <Paper elevation={0} style={ paperStyle }>
        <form>
        <TextField label='Email address' placeholder='Enter email' fullWidth required onChange={ handleInput } id='email'/>
        <TextField label='Password' placeholder='Enter password' type='password' fullWidth required onChange={ handleInput } id='password'/>
        <FormControlLabel
          control={
            <Checkbox
              name="checkedB"
              color="primary"
            />
          }
            label="Keep me signed in. What is this?"
        />
        <Typography >
          <Link style={ forgetPass } href="#" >
            Forgot password ?
          </Link>
        </Typography>
        <Button type='submit' onClick={ handleSubmit }  variant="contained" style={ btnstyle } fullWidth>Sign in</Button>
        </form>
        <Typography > Do you have an account ?
          <Link href="#" onClick={ () => handleChange("event", 1) } >
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
