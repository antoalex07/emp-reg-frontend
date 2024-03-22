import React, { useEffect, useState } from 'react'
import api from '../../api/axiosConfig.js'
import { Button, TextField } from '@mui/material';

const UpdateEmployee = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  const [employee, setEmployee] = useState({
    id: 11203,
    name: "antoalex09",
    wageRate: 1200,
    overtimeRate: 2000,
    dueAmount: 2000
  });

  const handleChange = () => {
    console.log("code to be written");
  }

  const handleSubmit = () => {
    console.log("code to be written");
  }

  const getEmployee = async () => {
    try {
      
      const response = await api.get(`/api/v2/employee/${id}`);
      console.log(response.status);
      setEmployee(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEmployee();
  }, [])

  return (
      <div className='form-container'>
            <h1 className='heading'>Edit Employee Details</h1>
            <form className='form' onSubmit={handleSubmit}>

                <div className='form-field'>
                    <TextField
                        id='outlined-read-only-input'
                        label='Id'
                        value={employee.id}
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
                        label="Name"
                        type="text"
                        value={employee.name}
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
                        value={employee.wageRate}
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
                        value={employee.overtimeRate}
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
                        value={employee.dueAmount}
                        name="dueAmount"
                        onChange={handleChange}
                        sx={{width: 300}}
                    />
                </div>

          <Button variant="contained" type='submit'>Submit</Button>

        </form>
      </div>    
  )
}

export default UpdateEmployee