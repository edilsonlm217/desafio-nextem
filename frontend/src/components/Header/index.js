import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/nextem.png';

import { Container } from './styles';

export default function Header(props) {
  return (
    <Container>
      <Link to="/dashboard">
        <img src={logo} alt="Nextem"/>
      </Link>
    </Container>
  );
}
