import React from 'react';

import logo from '../../assets/nextem.png';

import { Content } from './styles';

export default function Login() {
  return (
    <Content>
      <img src={logo} alt="Nextem"/>
      <form>
        <input type="email" placeholder="Seu e-mail"/>
        <input type="password" placeholder="Sua senha secreta"/>

        <button type="submit" >Entrar no sistema</button>
      </form>
    </Content>
  );
}
