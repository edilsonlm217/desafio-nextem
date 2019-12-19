import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from '../../components/Header';

import { Container, TaskList, SubHeader } from './styles';

export default function Dashboard() {
	return (
		<Container>
			<MainHeader />
			<SubHeader>
				<strong>Dashboard</strong>
				<div>
					<Link to="/create">
						<button type>ADICIONAR</button>
					</Link>
				</div>
			</SubHeader>
			<TaskList>
				<li className="Done">
					<strong>Realizar testes funcionais</strong>
					<span>
						Feito | Assinalado para Edilson Lima
					</span>
				</li>
				<li className="WIP">
					<strong>Realizar testes unitários</strong>
					<span>
						Cancelado | Assinalado para Tereza Farias
					</span>
				</li>
				<li className="Review">
					<strong>Desenvolver o backend da aplicação</strong>
					<span>
						Aguardando Revisão | Assinalado para Moany Rocha
					</span>
				</li>
				<li className="ToDo">
					<strong>Contratar um Desenvolver</strong>
					<span>
						Em aberto
					</span>
				</li>
				<li className="Done">
					<strong>Realizar testes funcionais</strong>
					<span>
						Feito | Assinalado para Hemilly Julia
					</span>
				</li>
				<li className="WIP">
					<strong>Realizar testes unitários</strong>
					<span>
						Cancelado | Assinalado para Edilson Lima
					</span>
				</li>
				<li className="Review">
					<strong>Definir stakeholders</strong>
					<span>
						Aguardando Revisão | Assinalado para Moany Rocha
					</span>
				</li>
				<li className="ToDo">
					<strong>Entrega do produto</strong>
					<span>
						Em Aberto
					</span>
				</li>
			</TaskList>
		</Container>
  );
}
