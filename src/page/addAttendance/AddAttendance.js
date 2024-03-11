import { Autocomplete, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import "./AddAttendance.css";
import api from "../../api/axiosConfig";
import { useNavigate } from 'react-router-dom';

const remainingIds = [
  1102,
  1103,
  1104,
  1105
];

const AddAttendance = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const date = urlParams.get("date");
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    empId: "",
    date: date,
    work: 0,
    overtime: 0,
    advance: 0
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit= async (event) => {
    
    event.preventDefault();
    const jsonData = JSON.stringify(formData);
    //console.log(jsonData);

    try {
      
      const response = await api.post("/api/v2/attendance/create", {jsonData})
      console.log(response);
    
    } catch (error) {

      console.log(error);
      
    }

    

  };

  return (
    <div className='form-container'>

        <h1 className='heading'>New Attendance Entry</h1>
        
        <form className='form' onSubmit={handleSubmit}>

          <div className='form-field'>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={remainingIds}
              sx={{ width: 300 }}
              getOptionLabel={(option) => option.toString()} 
              onChange={(event, newValue) => {
                const selectedEmployeeId = newValue ? newValue.toString() : ''; 
                setFormData({ ...formData, empId: selectedEmployeeId }); 
              }}
              renderInput={(params) => <TextField {...params} label="Employee Id"/>}
            />
          </div>

          <div className='form-field'>
            <TextField
              id="outlined-read-only-input"
              label="Date"
              value={formData.date}
              InputProps={{
                readOnly: true,
              }}
              sx={{width: 300}}
            />
          </div>
          
          <div className='form-field'>
            <TextField
              required
              id="outlined-required"
              label="Work"
              type="number"
              value={formData.work}
              name="work"
              onChange={handleChange}
              sx={{width: 300}}
            />
          </div>
          
          <div className='form-field'>
            <TextField
              required
              id="outlined-required"
              label="Overtime"
              type="number"
              value={formData.overtime}
              name="overtime"
              onChange={handleChange}
              sx={{width: 300}}
            />
          </div>
          
          <div className='form-field'>
            <TextField
              required
              id="outlined-required"
              label="Advance"
              type="number"
              value={formData.advance}
              name="advance"
              onChange={handleChange}
              sx={{width: 300}}
            />
          </div>
          
          <Button variant="contained" type='submit'>Submit</Button>
        
        </form>
    </div>
  )
}

export default AddAttendance