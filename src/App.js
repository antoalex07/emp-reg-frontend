import { Route, Routes } from 'react-router';
import './App.css';
import Header from './component/header/Header';
import Home from './page/home/Home';
import Day from './page/day/Day';
import Calendar from './component/calendar/Calendar';
import AddAttendance from './page/addAttendance/AddAttendance';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/calendar/day' element={<Day/>} />
        <Route path='/calendar/day/add-attendance' element={<AddAttendance/>} />
      </Routes>
    </div>
  );
}

export default App;
