import React from "react";
import Login from "./Pages/Login";
import Dashboard from "./Pages/DashProducts";
import { Route, Routes} from 'react-router-dom';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}

export default App;
