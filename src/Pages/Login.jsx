import React, { useState } from 'react';
import '../Styles/login.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const inicioSesion = async (e) => {
    e.preventDefault();

    const data = {
      usuario: usuario,
      password: password,
    };

    let resp;
    
    await axios
      .post("http://89.116.25.43:3500/api/login", data)
      .then((response) => {
        resp = response;
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 404) {
          Swal.fire("Información!", err.response.data.message, "error");
        } else {
          Swal.fire("Información!", "Ocurrió un error!", "error");
        }
      });

    console.log(resp); 
  };

  return (
    <div className="container"> 
      <div className='loginn'>
        <h1>Pantalla de Inicio de Sesión</h1>
        <div className='inputs'>
          <input
            type="text"
            placeholder="Usuario"
            onChange={(e) => setUsuario(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={inicioSesion}>Iniciar Sesión</button>
      </div>
    </div>
  );
} 

export default Login;
