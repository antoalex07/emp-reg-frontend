import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import "./CreateEmployee.css";
import { Button } from '@mui/material';
import api from "../../api/axiosConfig";

const CreateEmployee = () => {

  const [error, setError] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    empId: "",
    name: "",
    wageRate: 0,
    overtimeRate: 0,
    dueAmount: 0
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(formData);
    console.log(jsonData);

    try {
      
      const response = await api.post("/api/v2/employee/create", {jsonData})
      console.log(response);
    
    } catch (error) {

      console.log(error);
      
    }
  }

  return (
    <div className='form-container'>
       
       <h1 className='heading'>New Employee Entry</h1>
        
        <form className='form' onSubmit={handleSubmit}>
          
          <div className='form-field'>
          <TextField
            error={error}
            id="outlined-error"
            label="Employee Id"
            name="empId"
            onChange={async (event) => {
              const {name, value} = event.target;
              const isError = await api.get(`/api/v2/employee/check/${value}`);
              setError(isError);
              if(!isError){
                setFormData({ ...formData, [name]: value });
              }
              setFormValid(!isError);
            }}
            helperText={error ? "Incorrect entry." : ""}
            sx={{width: 300}}
          />
          </div>

          <div className='form-field'>
            <TextField 
              required
              id="outlined-required"
              label="Employee Name"
              type="text"
              name="name"
              onChange={handleChange}
              sx={{width: 300}}
            />
          </div>

          <div className='form-field'>
            <TextField 
              required
              id="outlined-required"
              label="Wage Rate"
              type="number"
              name="wageRate"
              onChange={handleChange}
              sx={{width: 300}}
            />
          </div>

          <div className='form-field'>
            <TextField 
              required
              id="outlined-required"
              label="Overtime Rate"
              type="number"
              name="overtimeRate"
              onChange={handleChange}
              sx={{width: 300}}
            />
          </div>

          <div className='form-field'>
            <TextField 
              required
              id="outlined-required"
              label="Due Amount"
              type="number"
              name="dueAmount"
              onChange={handleChange}
              sx={{width: 300}}
            />
          </div>

          <Button variant="contained" type='submit' disabled={!formValid}>Submit</Button>

        </form>
    </div>
  )
}

export default CreateEmployee