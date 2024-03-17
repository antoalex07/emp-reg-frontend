import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import "./EmployeeRegister.css";
import { Button } from '@mui/material';
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
      headerName: 'Edit',
      width: 150,
      renderCell: (params) => (
        <div>
            <Button onClick={() => handleButtonClick(params.row.id)}>Edit</Button>
        </div>
      ), 
    },
  ];

  const rows = [
    { id: 1, name: 'Snow', wageRate: 35, overtimeRate: 200, dueAmount: 6000 },
    { id: 2, name: 'Lannister', wageRate: 42, overtimeRate: 200, dueAmount: 6000 },
    { id: 3, name: 'Lannister', wageRate: 45, overtimeRate: 200, dueAmount: 6000 },
    { id: 4, name: 'Stark', wageRate: 16, overtimeRate: 200, dueAmount: 6000 },
    { id: 5, name: 'Targaryen', wageRate: 200, overtimeRate: 200, dueAmount: 6000 },
    { id: 6, name: 'Melisandre', wageRate: 150, overtimeRate: 200, dueAmount: 6000 },
    { id: 7, name: 'Clifford', wageRate: 44, overtimeRate: 200, dueAmount: 6000 },
    { id: 8, name: 'Frances', wageRate: 36, overtimeRate: 200, dueAmount: 6000 },
    { id: 9, name: 'Roxie', wageRate: 65, overtimeRate: 200, dueAmount: 6000 },
  ];
  

 const EmployeeRegister = () => {

    const [employees, setEmployees] = useState();

    const getEmployees = async () => {
        try {
            
            const response = await api.get("/api/v2/employee");
            console.log(response.status);
            setEmployees(response.data);
        
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getEmployees();
    }, [])

    console.log(employees);

    return (
      <div className='table'>
        <div style={{ height: 'calc(100% - 80px)', marginTop: -10 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
    );
}

export default EmployeeRegister