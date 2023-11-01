import Login from './Components/Login/Login';
import logo from './logo.svg';
import './App.css'

import {Routes,Route} from 'react-router-dom'
import Register from './Components/Register/Register';
import Admin from './Components/Admin/AdminPage/Admin';
import Employee from './Components/Admin/Employee/Employee';
import UpdateAddUser from './Components/Admin/UpdateAddUser/UpdateAddUser';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
          <Route path="admin" element={<Admin/>}></Route>
          <Route path='update' element={<UpdateAddUser/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
