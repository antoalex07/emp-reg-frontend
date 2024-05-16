import { Button, IconButton, InputBase, Paper, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'
import api from "../api/axiosConfig"
import { DataGrid } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import notFound from '../assets/not-found.png';
import ProfileCard from '../component/ProfileCard';
import bgPatternTop from '../assets/bg-pattern-top.svg'


const EmployeeDetails = () => {

  const [employeeId, setEmployeeId] = useState("");
  const [employeeDetails, setEmployeeDetails] = useState({ id: 1111,
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
  });
  const [searchInitiated, setSearchInitiated] = useState(false);
  
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
      backgroundImage: 'radial-gradient(circle, #ededed, #eceded, #ececed, #ebeced, #eaecec)',
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
        
        <div style={{display: 'flex'}}>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            width: '90vw',
            height: '54vh'
          }}>
			      <div style={{
              position: 'absolute',
              backgroundImage: `url(${bgPatternTop})`,
              backgroundPosition: 'bottom right',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              top: 0,
              left: 0,
              width: '50%',
              height: '1000px',
              transform: 'translateY(-50%)',
              zIndex: '-1' 
            }}></div>
			      <div className="bg-pattern-bottom"></div>

          	<ProfileCard
				      name={employeeDetails.name}
				      age="32"
              city="London"
              wageRate={employeeDetails.wageRate}
              overtimeRate={employeeDetails.overtimeRate}
              dueAmount={employeeDetails.dueAmount}
			      ></ProfileCard>

            <ThemeProvider theme={theme}>
              <Button variant='contained' 
                      color='cyan' 
                      style={{ fontSize: '20px',
                               width: '27.5vw',
                               marginTop: '600px',
                               marginLeft: '-350px'
                            }}>
                        Settle Bill</Button>
            </ThemeProvider>
		      </div>

          <DataGrid
              sx={{
                border: 'none',
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)',
                marginTop: '12px', 
                marginLeft: '-700px',
                height: '75vh',
                borderRadius: 3
              }}
              rows={employeeDetails.attendances}
              columns={columns}
            />

        </div>

      </div>
    )}
    </div>
  );
}

export default EmployeeDetails


  // const employee = { id: 1111,
  //   name: 'John Doe',
  //   wageRate: 20, // Example wage rate
  //   overtimeRate: 30, // Example overtime rate
  //   dueAmount: 100, // Example due amount
  //   attendances: [
  //     { id: 1211, date: '2024-03-01', work: 8, overtime: 2, advance: 500 },
  //     { id: 1212, date: '2024-03-02', work: 7, overtime: 3, advance: 600 },
  //     { id: 1213, date: '2024-03-03', work: 4, overtime: 8, advance: 650 },
  //     { id: 1214, date: '2024-03-04', work: 3, overtime: 5, advance: 760 },
  //     { id: 1215, date: '2024-03-05', work: 5, overtime: 6, advance: 800 },
  //     { id: 1216, date: '2024-03-06', work: 4, overtime: 7, advance: 750 },
  //     { id: 1217, date: '2024-03-07', work: 2, overtime: 3, advance: 800 },
  //     { id: 1218, date: '2024-03-08', work: 1, overtime: 9, advance: 600 },
  //     { id: 1219, date: '2024-03-09', work: 6, overtime: 1, advance: 900 },
  //     { id: 1220, date: '2024-03-10', work: 7, overtime: 4, advance: 1000 },
  //     { id: 1221, date: '2024-03-11', work: 4, overtime: 5, advance: 200 },
  //   ]
  // };