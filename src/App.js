import Login from './Components/Login/Login';
import logo from './logo.svg';
import './App.css'

import {Routes,Route} from 'react-router-dom'
import Register from './Components/Register/Register';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
