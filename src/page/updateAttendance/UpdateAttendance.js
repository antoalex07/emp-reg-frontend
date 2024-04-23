import React, { useEffect, useState } from 'react'
import api from '../../api/axiosConfig.js';
import { Button, TextField } from '@mui/material';

const UpdateAttendance = () => {

    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    const date = urlParams.get("date");
    const [attendance, setAttendance] = useState({
        date: date,
        work: 5,
        overtime: 4,
        advance: 1000
    });

    const handleChange = () => {
        console.log("murica");
    }

    const handleSubmit = () => {
        console.log("canada");
    }

    const getAttendance = async () => {
        try {
            
            const response = await api.get(`/api/v2/attendance/${id}`);
            console.log(response.status);
            setAttendance(response.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAttendance();
    }, [])

    return (
        <div className='form-container'>
            <h1 className='heading'>Edit Attendance Details</h1>
            <form className='form' onSubmit={handleSubmit}>

                <div className='form-field'>
                    <TextField
                        id='outlined-read-only-input'
                        label='Date'
                        value={attendance.date}
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
                        value={attendance.work}
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
                        value={attendance.overtime}
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
                        value={attendance.advance}
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

export default UpdateAttendance