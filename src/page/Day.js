import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './Day.css';
import api from '../api/axiosConfig';

const columns = [
  { field: 'empId', 
    headerName: 'ID', 
    width: 70 
  },
  { 
    field: 'name', 
    headerName: 'Name', 
    width: 130 
  },
  { 
    field: 'wageRate', 
    headerName: 'Wage Rate',
    type: 'number', 
    width: 130 },
  {
    field: 'overtimeRate',
    headerName: 'Overtime Rate',
    type: 'number',
    width: 130,
  },
  {
    field: 'dueAmount',
    headerName: 'Due Amount',
    type: 'number',
    width: 90,
  },
];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

const Day = () => {

  // const urlParams = new URLSearchParams(window.location.search);
  // const date = urlParams.get("date");
  const [employees, setEmployees] = useState();

  const getEmployees = async () => {
    try {
      
      const response = await api.get("/api/v2/employee");
      console.log(response);
      setEmployees(response.data);

    } catch (error) {
      
      console.log(error);

    }
  }

  useEffect(() => {
    getEmployees();
  }, [])

  return (
    <div className='table'>
      <DataGrid
        rows={employees}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Day