import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import "./CreateEmployee.css";
import { Button } from '@mui/material';

const CreateEmployee = () => {

  const [value, setValue] = useState();
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const inputValue = event.target.value;
    // Here you can add your logic to check if the input value is erroneous
    const isError = inputValue.trim() === ""; // Example: Check if the input is empty
    setError(isError);
    setValue(inputValue);
  };

  const handleSubmit = () => {
    console.log("beautiful");
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
            value={value}
            onChange={handleChange}
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
              //value={formData.work}
              name="name"
              //onChange={handleChange}
              sx={{width: 300}}
            />
          </div>

          <div className='form-field'>
            <TextField 
              required
              id="outlined-required"
              label="Wage Rate"
              type="number"
              //value={formData.work}
              name="wageRate"
              //onChange={handleChange}
              sx={{width: 300}}
            />
          </div>

          <div className='form-field'>
            <TextField 
              required
              id="outlined-required"
              label="Overtime Rate"
              type="number"
              //value={formData.work}
              name="overtimeRate"
              //onChange={handleChange}
              sx={{width: 300}}
            />
          </div>

          <div className='form-field'>
            <TextField 
              required
              id="outlined-required"
              label="Due Amount"
              type="number"
              //value={formData.work}
              name="dueAmount"
              //onChange={handleChange}
              sx={{width: 300}}
            />
          </div>

          <Button variant="contained" type='submit'>Submit</Button>

        </form>
    </div>
  )
}

export default CreateEmployee