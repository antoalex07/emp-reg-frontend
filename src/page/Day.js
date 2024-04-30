import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import api from '../api/axiosConfig';
import { Button, Fab, ThemeProvider, createTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import emptyFolder from '../assets/empty-folder.jpg';

const Day = () => {

  const urlParams = new URLSearchParams(window.location.search);
  const date = urlParams.get("date");

  const [attendances, setAttendances] = useState([]);
  const navigate = useNavigate();

  const handleButtonClick = (id) => {
    navigate(`updateAttendance?id=${id}&date=${date}`);
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
      field: 'work', 
      headerName: 'Work Load',
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
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
          <Button onClick={() => handleButtonClick(params.row.empId)}>
            Edit
          </Button>
        </div>
      ), 
    },
  ];

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

  const getAttendances = async () => {
    
    try {
      
      const response = await api.get(`/api/v2/attendance/${date}`);
      console.log(response.status);
      setAttendances(response.data);

    } catch (error) {
      
      console.log(error);

    }
  }

  useEffect(() => {
    getAttendances();
  }, [])

  const handleAddButtonClick = () => {
    navigate(`/calendar/day/add-attendance?date=${date}`);
  }

  return (
    <div style={{ display: 'flex', 
                  justifyContent: 'center',
                  marginTop: '16px'
    }}>
      {attendances.length === 0 ? (
        <div>
          <div style={{ backgroundImage: `url(${emptyFolder})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        marginLeft: '100px',
                        width: '20vw',
                        height: '50vh'
                      }}></div>

            <div style={{ fontFamily:"Lato, sans-serif",
                          flex: 1,
                          display: 'flex',
                          position: 'relative',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}>

              <h1>No Attendance Found</h1>
              <p>We couldn't find any attendance data in the Registry. 
                <span>Please try again</span></p> 
                
            </div>
                
            <ThemeProvider theme={theme}>
              <Button variant='contained' color='black' onClick={handleAddButtonClick}>+ Add Attendance</Button>
            </ThemeProvider>
          </div>
        ) : (
          <div>
            <Fab
              color='primary'
              aria-label='add'
              style={{ position: 'fixed', 
                       bottom: 20, 
                       right: 20, 
                       zIndex: 1000}}
              onClick={handleAddButtonClick}>
              <FontAwesomeIcon icon={faUserPlus}/>
            </Fab>

            <div>
              <DataGrid
                sx={{ border: 'none',
                      boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
                      marginTop: '12px', 
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '75vh',
                      borderRadius: 3
                    }}
                rows={attendances}
                columns={columns}/>
            </div>
          </div>
        )}
    </div>
  )
}

export default Day


// const rows = [
//   { id: 1, name: 'Snow', work: 5, overtime: 3, advance: 3000 },
//   { id: 2, name: 'Lannister', work: 5, overtime: 3, advance: 3000 },
//   { id: 3, name: 'Lannister', work: 5, overtime: 3, advance: 3000 },
//   { id: 4, name: 'Stark', work: 5, overtime: 3, advance: 3000 },
//   { id: 5, name: 'Targaryen', work: 5, overtime: 3, advance: 3000 },
//   { id: 6, name: 'Melisandre', work: 5, overtime: 3, advance: 3000 },
//   { id: 7, name: 'Clifford',  work: 5, overtime: 3, advance: 3000 },
//   { id: 8, name: 'Frances', work: 5, overtime: 3, advance: 3000 },
//   { id: 9, name: 'Roxie', work: 5, overtime: 3, advance: 3000 },
// ];
