import React, { useState } from 'react';
import api from '../../services/api';
import { toast } from 'react-toastify';

import logo from '../../assets/nextem.png';

import { Content } from './styles';

export default function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', {
        email,
        password,
      });
  
      const { token } = response.data;
  
      localStorage.setItem('@nextem-app/token', token);
  
      history.push('/dashboard');
    } catch {
      toast.error('Falha na autenticação. Verifique seu usuário e senha!');
    }
  }

  return (
    <Content>
      <img src={logo} alt="Nextem"/>
      <form onSubmit={handleSubmit}>
        <input
          type="email" 
          onChange={e => setEmail(e.target.value)} 
          placeholder="Seu e-mail"/>
        <input 
          type="password" 
          onChange={e => setPassword(e.target.value)}
          placeholder="Sua senha secreta"/>

        <button type="submit" >Entrar no sistema</button>
      </form>
    </Content>
  );
}
