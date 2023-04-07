import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Link } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleChange }) => {
  const paperStyle = { padding: 20, height: '45vh', width: 300, margin: "0" , elevation: "0"};
  const btnstyle = { margin: '8px 0', backgroundColor: 'black', color: 'white' };

  const navigate = useNavigate();


  //States
  const [ formData, setForm ] = useState({
    firstName : '',
    lastName:"ram",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName === "" || formData.email === "" || formData.password === ""){
      return
    }

    const {data} = await axios.post("https://farfetch-backend.vercel.app/register", formData)
    console.log(data)
    
    if (data.status === "ok") {
      alert("Register Successfully");
      navigate('/account#')
    } 
    else {
      alert("email should be unique");
    }
    
  }
  

  return (
    <Grid>
      <Paper style={ paperStyle }>
        <form>
          <TextField fullWidth label='Name' placeholder="Enter your name" onChange={ handleInput } id='firstName' required/>
          <TextField fullWidth label='Email' placeholder="Enter your email" onChange={ handleInput } id='email' required/>
          <TextField fullWidth label='Password' placeholder="Enter your password" onChange={ handleInput } id='password' required/>
          <FormHelperText>By registering, you agree with our Terms & Conditions and Privacy and Cookie Policy.</FormHelperText>
          <FormControlLabel
            control={ <Checkbox name="checkedA" /> }
            label="I accept the terms and conditions."
          />
          <Button type='submit' variant='contained' style={ btnstyle } onClick={ handleSubmit } >Register</Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;