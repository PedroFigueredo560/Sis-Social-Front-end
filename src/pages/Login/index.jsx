import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../layout/AuthContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import "./style.css";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/validate_login_ben", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        login(data.token);
        toast.success('Login bem-sucedido!', { autoClose: 3000 }); 
        setTimeout(() => {
          navigate("/"); 
        }, 3000); 
      } else {
        toast.error(data.message || 'Erro ao fazer login.'); 
      }
    } catch (error) {
      toast.error('Erro inesperado. Por favor, tente novamente.');
    }
  };

  return (
    <div className="login">
      <ToastContainer />
      <h1>Login</h1>
      <form className='formulario-login' onSubmit={handleSubmit}>
        <label>Usuário</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          required
        />
        <label>Senha</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="buttons-container">
          <button className='button' type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
