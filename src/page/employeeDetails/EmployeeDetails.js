import { Button, Card, CardContent, IconButton, InputBase, Paper, ThemeProvider, Typography, createTheme } from '@mui/material'
import React, { useState } from 'react'
import api from "../../api/axiosConfig"
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import notFound from '../../assets/not-found.png';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';


const EmployeeDetails = () => {

  const [employeeId, setEmployeeId] = useState("");
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [searchInitiated, setSearchInitiated] = useState(false);

  const employee = { id: 1111,
    name: 'John Doe',
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
    ]
  };
  
  const navigate = useNavigate();

  const handleButtonClick = (id, date) => {
    console.log('Button clicked for row Id: ', id);
    navigate(`/updateAttendance?id=${id}&date=${date}`);
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
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div>
            <Button onClick={() => handleButtonClick(params.row.id, params.row.date)}>Edit</Button>
        </div>
      ), 
    },
  ];



  const handleSearch = async () => {
    try {
      setSearchInitiated(true);      
      const response = await api.get(`api/v2/employee/${employeeId}`);
      console.log(response.status);
      setEmployeeDetails(response.data);

    } catch (error) {
      console.log(error);
    }
  }
  const theme = createTheme({
    palette: {
      cyan: {
        main: '#0a0a0a',
        light: '#2f2f2f',
        dark: '#000000',
        contrastText: '#e7e7e7',
      },
    },
  });

  return (
    <div style={{
      backgroundImage: 'radial-gradient(circle, #b9e3e7, #b2e2e6, #abe2e5, #a3e1e4, #9ce0e3)',
      position: 'fixed',
      height: '100vh', 
      width: '100vw',
      display: 'flex',
      top: 0,
      left: 0,
      zIndex: -2,
      flexDirection: 'column',
      alignItems: 'center' 
    }}>
    <Paper
      component="form"
      sx={{
        marginTop: '6%',
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400
      }}
      onSubmit={(event) => {
        event.preventDefault();
        handleSearch();
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Employee (ID)"
        inputProps={{ 'aria-label': 'search employee' }}
        value={employeeId}
        onChange={(event) => {
          setEmployeeId(event.target.value);
        }}
     />
      <IconButton 
        type="submit" 
        sx={{ p: '10px' }} 
        aria-label="search"
        >
        <SearchIcon />
      </IconButton>
    </Paper>
    
    {searchInitiated && employeeDetails.length === 1 ? (
      
      <div style={{
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        height: '500px',
        width: '100%'
      }}>
        <div style={{ 
          backgroundImage: `url(${notFound})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
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
            alignItems: 'center'
          }}>

          <h1>No Employee found</h1>
          <p>We couldn't find any employee for the given ID in the Registry. Please try again</p> 
                
        </div>
      </div>
    ) : ( searchInitiated &&
      <div>
        <div style={{
          display: 'flex',
          marginTop: '16px'
        }}>
          <Card sx={{
            width: 295,
            height: 90,
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
            borderRadius: 3
          }}>
            <CardContent sx={{
              backgroundImage: "linear-gradient(to left, #e2edf2, #d2e9f1, #c0e6ef, #aee3ea, #9ce0e3)",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}>
              <Typography sx={{ textAlign: 'left',
                                fontFamily: 'Reem Kufi, sans seriff'
                            }}>
                Name: 
              </Typography>
              <Typography 
                variant='h5' 
                component='div' 
                sx={{ textAlign: 'center',
                      fontFamily:"Lato, sans-serif",
                    }}>
                {employee.name}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            width: 295,
            height: 90,
            backgroundImage: "linear-gradient(to right bottom, #e2edf2, #d2e9f1, #c0e6ef, #aee3ea, #9ce0e3)",
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
            marginLeft: '8px',
            borderRadius: 3
          }}>
            <CardContent>
              <Typography sx={{ textAlign: 'left',
                                fontFamily: 'Reem Kufi, sans seriff'
                            }}>
                Wage Rate
              </Typography>
              <Typography 
                variant='h5' 
                component='div' 
                sx={{ textAlign: 'center',
                      fontFamily:"Lato, sans-serif",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                <CurrencyRupeeIcon sx={{  fontSize: 'inherit', verticalAlign: 'middle' }}/> {employee.wageRate}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            width: 295,
            height: 90,
            backgroundImage: "linear-gradient(to left bottom, #e2edf2, #d2e9f1, #c0e6ef, #aee3ea, #9ce0e3)",
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
            marginLeft: '8px',
            borderRadius: 3
          }}>
            <CardContent>
              <Typography sx={{ textAlign: 'left',
                                fontFamily: 'Reem Kufi, sans seriff',
                            }}>
                Overtime Rate
              </Typography>
              <Typography 
                variant='h5' 
                component='div' 
                sx={{ textAlign: 'center',
                      fontFamily:"Lato, sans-serif",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                <CurrencyRupeeIcon sx={{fontSize: 'inherit', verticalAlign: 'middle'}}/> {employee.overtimeRate}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{
            width: 295,
            height: 90,
            backgroundImage: 'linear-gradient(to right, #e2edf2, #d2e9f1, #c0e6ef, #aee3ea, #9ce0e3)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
            marginLeft: '8px',
            borderRadius: 3
          }}>
            <CardContent>
              <Typography sx={{ textAlign: 'left',
                                fontFamily: 'Reem Kufi, sans seriff'
                            }}>
                Due Amount
              </Typography>
              <Typography 
                variant='h5' 
                component='div' 
                sx={{ textAlign: 'center',
                      fontFamily:"Lato, sans-serif",
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                <CurrencyRupeeIcon sx={{ fontSize: 'inherit', verticalAlign: 'middle' }}/> {employee.dueAmount}
              </Typography>
            </CardContent>
          </Card>
        </div>
        
        <div style={{display: 'flex'}}>
          <DataGrid
              sx={{
                border: 'none',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
                marginTop: '8px', 
                height: 400,
                width: '10vw',
                marginLeft: '50px',
                marginRight: '9px',
                borderRadius: 3
              }}
              rows={employee.attendances}
              columns={columns}
            />
          <div>
            <div style={{}}>
            
            <Typography sx={{ textAlign: 'left',
                              fontFamily: 'Anton, sans seriff',
                              fontSize: '50px',
                              color: '#03666f'
                            }}>
                Extend Your <span style={{color: '#038b94'}}>Dreams,</span>
            </Typography>
            
            <Typography sx={{ textAlign: 'left',
                              fontFamily: 'Pacifico, sans seriff',
                              fontSize: '40px',
                              color: '#049fb9'
                            }}>
                make it beautiful
            </Typography>
            
            <Typography sx={{ textAlign: 'left',
                              fontFamily: 'Anton, sans seriff',
                              fontSize: '50px',
                              color: '#33b5ab'
                            }}>
                with <span style={{color: '#66bfaf'}}>Natrium Solutions</span>
            </Typography>
            
            <ThemeProvider theme={theme}>
              <Button variant='contained' 
                      color='cyan' 
                      style={{ fontSize: '20px',
                               width: '500px',
                               marginTop: '28%' 
                                }}>
                        Settle Bill</Button>
            </ThemeProvider>
            
            </div>
          </div>
        </div>

      </div>
    )}
    </div>
  );
}

export default EmployeeDetails