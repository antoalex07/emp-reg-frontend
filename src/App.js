import { Route, Routes } from 'react-router';
import './App.css';
import Header from './component/header/Header';
import Home from './page/Home';
import Day from './page/Day';
import Calendar from './component/calendar/Calendar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/calendar' element={<Calendar/>} />
        <Route path='/calendar/day' element={<Day/>} />
      </Routes>
    </div>
  );
}

export default App;
