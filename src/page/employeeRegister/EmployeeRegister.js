import React, { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import emptyFolder from '../../assets/empty-folder.jpg'

const EmployeeRegister = () => {

  const [employees, setEmployees] = useState([]);

  const navigate = useNavigate();

  const handleButtonClick = (id) => {
      console.log('Button clicked for row Id: ', id);
      navigate(`/updateEmployee?id=${id}`);
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

    const theme = createTheme({
      palette: {
        black: {
          main: '#0a0a0a',
          light: '#2f2f2f',
          dark: '#000000',
          contrastText: '#e7e7e7',
        },
      },
    });
    

    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3%',
        position: 'relative',
        height: '100%',
        width: '100%'
      }}>

          {employees.length === 0 ? (
            <div>
                <div style={{ 
                  backgroundImage: `url(${emptyFolder})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  marginLeft: '100px',
                  width: '20vw',
                  height: '50vh'
                }}></div>

                <div style={{
                  fontFamily:"Lato, sans-serif",
                  flex: 1,
                  display: 'flex',
                  position: 'relative',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>

                  <h1>No Employees Found</h1>
                  <p>We couldn't find any employee data in the Registry. Please try again</p> 
                
                </div>
                
                <ThemeProvider theme={theme}>
                  <Button variant='contained' color='black'>+ New Employee</Button>
                </ThemeProvider>
            </div>
          ) : (
            <div style={{ height: 'calc(100% - 80px)', 
            marginTop: -10,
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
            backgroundColor: 'lightblue'
          }}>
            <DataGrid
            sx={{
              border: 'none',
              boxShadow: 'inherit',
              marginTop: '10px', 
              height: 515
            }}
            rows={employees}
            columns={columns}
          />
          </div>
          )}
      </div>
    );
}

export default EmployeeRegister


// const rows = [
//   { id: 1, name: 'Snow', wageRate: 35, overtimeRate: 200, dueAmount: 6000 },
//   { id: 2, name: 'Lannister', wageRate: 42, overtimeRate: 200, dueAmount: 6000 },
//   { id: 3, name: 'Lannister', wageRate: 45, overtimeRate: 200, dueAmount: 6000 },
//   { id: 4, name: 'Stark', wageRate: 16, overtimeRate: 200, dueAmount: 6000 },
//   { id: 5, name: 'Targaryen', wageRate: 200, overtimeRate: 200, dueAmount: 6000 },
//   { id: 6, name: 'Melisandre', wageRate: 150, overtimeRate: 200, dueAmount: 6000 },
//   { id: 7, name: 'Clifford', wageRate: 44, overtimeRate: 200, dueAmount: 6000 },
//   { id: 8, name: 'Frances', wageRate: 36, overtimeRate: 200, dueAmount: 6000 },
//   { id: 9, name: 'Roxie', wageRate: 65, overtimeRate: 200, dueAmount: 6000 },
// ];