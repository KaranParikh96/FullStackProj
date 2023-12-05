import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path="/createuser" element={<CreateUser />}></Route>
          <Route path="/updateuser/:id" element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
