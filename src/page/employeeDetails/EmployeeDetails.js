import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import "./EmployeeDetails.css";
import api from "../../api/axiosConfig"
import { DataGrid } from '@mui/x-data-grid';

const handleButtonClick = (id) => {
  console.log('Button clicked for row Id: ', id);
};

const columns = [
  { field: 'id', 
    headerName: 'ID', 
    width: 70 
  },
  { 
    field: 'date', 
    headerName: 'Date', 
    width: 130 
  },
  { 
    field: 'work', 
    headerName: 'Work',
    type: 'number', 
    width: 130 },
  {
    field: 'overtime',
    headerName: 'Overtime Hours',
    type: 'number',
    width: 130,
  },
  {
    field: 'advance',
    headerName: 'Advance',
    type: 'number',
    width: 90,
  },
  {
    field: 'actions',
    headerName: 'Edit',
    width: 150,
    renderCell: (params) => (
      <div>
          <Button onClick={() => handleButtonClick(params.row.id)}>Edit</Button>
      </div>
    ), 
  },
];


const EmployeeDetails = () => {

  const [employeeId, setEmployeeId] = useState("");
  const [employeeDetails, setEmployeeDetails] = useState(null);

  // const handleSearch = async () => {
  //   try {
      
  //     const response = await api.get(`api/v2/employee/${employeeId}`);
  //     console.log(response.status);
  //     setEmployeeDetails(response.data);

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const handleSearch = () => {
    // Assuming you have a function to fetch employee details based on ID
    // Replace this with your actual fetch logic
    fetchEmployeeDetails(employeeId)
      .then((data) => setEmployeeDetails(data))
      .catch((error) => console.error('Error fetching employee details: ', error));
  };

  const fetchEmployeeDetails = async (id) => {
    // Mock fetch function, replace with actual implementation
    // This can be an API call to your backend
    return new Promise((resolve, reject) => {
      // Simulating asynchronous fetch
      setTimeout(() => {
        // Mock employee data
        const employeeData = {
          id: id,
          name: 'John Doe',
          department: 'Engineering',
          wageRate: 20, // Example wage rate
          overtimeRate: 30, // Example overtime rate
          dueAmount: 100, // Example due amount
          attendances: [
            { id: 1211, date: '2024-03-01', work: 8, overtime: 2, advance: 500 },
            { id: 1212, date: '2024-03-02', work: 7, overtime: 3, advance: 600 },
            { id: 1213, date: '2024-03-03', work: 4, overtime: 8, advance: 650 },
            { id: 1214, date: '2024-03-04', work: 3, overtime: 5, advance: 760 },
            { id: 1215, date: '2024-03-05', work: 5, overtime: 6, advance: 800 },
            { id: 1216, date: '2024-03-06', work: 4, overtime: 7, advance: 750 },
            { id: 1217, date: '2024-03-07', work: 2, overtime: 3, advance: 800 },
            { id: 1218, date: '2024-03-08', work: 1, overtime: 9, advance: 600 },
            { id: 1219, date: '2024-03-09', work: 6, overtime: 1, advance: 900 },
            { id: 1220, date: '2024-03-10', work: 7, overtime: 4, advance: 1000 },
            { id: 1221, date: '2024-03-11', work: 4, overtime: 5, advance: 200 },

            // Add more attendance objects as needed
          ],
        };
        resolve(employeeData);
      }, 1000); // Simulating delay of 1 second
    });
  };

  return (
    <div className='emp-details'>
      <div className='search-button'>
        <TextField 
          label="Search Employee (ID)" 
          color="secondary" 
          focused
          value={employeeId}
          onChange={(event) => {
            setEmployeeId(event.target.value)
          }}  
          onKeyDown={(event) => {
            if(event.key === 'Enter'){
              handleSearch();
            }
          }}
        />
      </div>
        {employeeDetails && (
          <>
          <div className='details-container'>
            <div className='general-details'>
              <h2>General Details</h2>
              <p><strong>Name: </strong>{employeeDetails.name}</p>
              <p><strong>Wage Rate: </strong>{employeeDetails.wageRate}</p>
              <p><strong>Overtime Rate: </strong>{employeeDetails.overtimeRate}</p>
              <p><strong>Due Amount: </strong>{employeeDetails.dueAmount}</p>
            </div>
            <div className='attendance-details'>
              <h2>Attendance Details</h2>
              <div style={{ height: 'auto', marginTop: -10 }}>
                <DataGrid
                  rows={employeeDetails.attendances}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  disableExtendRowFullWidth={true}
                />
              </div>
            </div>
          </div>
          </>
        )}
    </div>
  )
}

export default EmployeeDetails