import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './Day.css';
import api from '../../api/axiosConfig';
import { Fab } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

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

  const [attendances, setAttendances] = useState();
  const navigate = useNavigate();

  const getAttendances = async () => {
    
    try {
      
      const response = await api.get(`/api/v2/attendance/${date}`);
      console.log(response);
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
    <div className='table'>
      <Fab
        color='primary'
        aria-label='add'
        style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1000}}
        onClick={handleAddButtonClick}
      >
        <FontAwesomeIcon icon={faUserPlus}/>
      </Fab>

      <div style={{ height: 'calc(100% - 80px)', marginTop: -10 }}>
        <DataGrid
          rows={attendances}
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
  )
}

export default Day