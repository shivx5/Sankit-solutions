import Login from './Components/Login/Login';
import logo from './logo.svg';
import './App.css'

import {Routes,Route} from 'react-router-dom'
import Register from './Components/Register/Register';
import Admin from './Components/Admin/AdminPage/Admin';
// import AllEmployee from './Components/Admin/Employee/AllEmployee';
import UpdateAddUser from './Components/Admin/UpdateAddUser/UpdateAddUser';
import Employee from './Components/Employee/EmployeeHome/Employee';
import ViewEmp from './Components/Employee/ViewEmp/ViewEmp';
import UpdateEmp from './Components/Employee/UpdateEmp/UpdateEmp';
import AllEmployee from './Components/Admin/Employee/AllEmployee';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="register" element={<Register/>}></Route>
          <Route path="admin" element={<Admin/>}>
            <Route path='allemployee' element={<AllEmployee/>}></Route>
          </Route>
          <Route path='update' element={<UpdateAddUser/>}></Route>
          <Route path='employee' element={<Employee/>}>
            <Route path='view' element={<ViewEmp/>}></Route>
            <Route path='update' element={<UpdateEmp/>}></Route>
          </Route>
     </Routes>
    </div>
  );
}

export default App;
