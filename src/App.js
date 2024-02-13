import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddStudent from './pages/AddStudent';
import './App.css';
import Viewstudent from './pages/ViewStudents';

function App() {
  return (
    <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/addstudent" element={<AddStudent />}></Route>
          <Route path="/viewstudents" element={<Viewstudent />}></Route>
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;


