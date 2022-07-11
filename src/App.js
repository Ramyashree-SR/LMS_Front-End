import React from 'react'
import './App.css';
import 'antd/dist/antd.css'; 
import Login from './components/Login';
import AdminPage from './components/admin/AdminPage';
import AddBatch from './components/admin/AddBatch';
import AddMentor from './components/admin/AddMentor';
import Request from './components/admin/Request';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MentorList from './components/mentor/MentorList';
import BatchList from './components/mentor/BatchList';

import Attendence from './components/mentor/Attendence';
import EmployeeList from './components/mentor/EmployeeList';
import DashBoard from './components/mentor/DashBoard';
import StepperForm from './components/employeedetails/StepperForm';
import EmployeRegister from './components/employeedetails/EmployeRegister';
import DashBoarrd from './components/employeedetails/DashBoarrd';
import LoginPage from './components/LoginPage';
import ResetPassword from './components/ResetPassword';




function App() {
  return (
    <div className="App">
      {/* <LoginPage/> */}
      {/* <Login/> */}
      {/* <AdminPage/> */}
      {/* <AddMentor/> */}
      {/* <AddBatch/> */}
      {/* <Request/> */}
      <ResetPassword/> 

      {/* <BrowserRouter>
      <AdminPage/>
      <Routes>
        <Route path="/AddBatch"  element={ <AddBatch/> }/>
        <Route path="/AddMentor" element={<AddMentor/> }/>
        <Route path="/Request"  element={ <Request/> }/>
      </Routes>
     </BrowserRouter> */}

      {/* <BrowserRouter>
     <MentorList/>
     <Routes>
          <Route path="/BatchList" element={ <BatchList /> }/>
          <Route path="/EmployeeList" element={ <EmployeeList /> }/>
      </Routes>
     </BrowserRouter>  */}

      
      {/* <Attendence/> 
       <EmployeeList/> */}


      {/* <BrowserRouter>
      <EmployeRegister/>
      <StepperForm/>
      <Routes>
      <Route path="/DashBoarrd" element={<DashBoarrd /> }/>
      <Route path="/StepperForm" element={<StepperForm /> }/>
      </Routes>
      </BrowserRouter> */}
      
      
     </div>
  );
}

export default App;
