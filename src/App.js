import { Route, Routes } from 'react-router';
import './App.css';
import Header from './component/header/Header';
import Home from './page/home/Home';
import Day from './page/day/Day.js';
import Calendar from './component/calendar/Calendar';
import AddAttendance from './page/addAttendance/AddAttendance';
import CreateEmployee from './page/createEmployee/CreateEmployee';
import EmployeeRegister from './page/EmployeeRegister';
import EmployeeDetails from './page/EmployeeDetails';
import UpdateEmployee from './page/updateEmployee/UpdateEmployee';
import UpdateAttendance from './page/updateAttendance/UpdateAttendance';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/calendar/day' element={<Day/>} />
        <Route path='/calendar/day/add-attendance' element={<AddAttendance/>} />
        <Route path='/createEmployee' element={<CreateEmployee/>} />
        <Route path='/employeeRegister' element={<EmployeeRegister/>} />
        <Route path='/employeeDetails' element={<EmployeeDetails/>} />
        <Route path='/updateEmployee' element={<UpdateEmployee/>}/>
        <Route path='/updateAttendance' element={<UpdateAttendance/>}/>
      </Routes>
    </div>
  );
}

export default App;
