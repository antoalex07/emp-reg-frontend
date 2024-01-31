import { Route, Routes } from 'react-router';
import './App.css';
import Header from './component/header/Header';
import Home from './page/Home';
import Day from './page/Day';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/day' element={<Day/>} />
      </Routes>
    </div>
  );
}

export default App;
