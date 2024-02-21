import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './Day.css';
import api from '../api/axiosConfig';

const handleButtonClick = (id) => {
  console.log('Button clicked for row Id: ', id);
};

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
  {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params) => (
      <div>
        <button onClick={() => handleButtonClick(params.row.empId)}>
          Edit
        </button>
      </div>
    ), 
  },
];

const rows = [
  { id: 1, name: 'Snow', firstName: 'Jon', wageRate: 35 },
  { id: 2, name: 'Lannister', firstName: 'Cersei', wageRate: 42 },
  { id: 3, name: 'Lannister', firstName: 'Jaime', wageRate: 45 },
  { id: 4, name: 'Stark', firstName: 'Arya', wageRate: 16 },
  { id: 5, name: 'Targaryen', firstName: 'Daenerys', wageRate: null },
  { id: 6, name: 'Melisandre', firstName: null, wageRate: 150 },
  { id: 7, name: 'Clifford', firstName: 'Ferrara', wageRate: 44 },
  { id: 8, name: 'Frances', firstName: 'Rossini', wageRate: 36 },
  { id: 9, name: 'Roxie', firstName: 'Harvey', wageRate: 65 },
];

const Day = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const date = urlParams.get("date");

  const [employees, setEmployees] = useState();

  const getEmployees = async () => {
    
    try {
      
      const response = await api.get(`/api/v2/employee/${date}`);
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
        rows={rows}
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