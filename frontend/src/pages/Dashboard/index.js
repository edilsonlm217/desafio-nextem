import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import MainHeader from '../../components/Header';

import { Container, TaskList, SubHeader } from './styles';

export default function Dashboard() {
	const [tasks, setTasks] = useState([]);
	const Authorization = 'Bearer ' + localStorage.getItem('@nextem-app/token');

	useEffect(() => {
		async function loadTasks() {
			const response = await api.get('/task', {
				headers: {
					Authorization,
				},
			})

			setTasks(response.data);
		}
		
		loadTasks();
	}, [Authorization]);
	
	return (
		<Container>
			<MainHeader />
			<SubHeader>
				<strong>Dashboard</strong>
				<div>
					<Link to="/create">
						<button>ADICIONAR</button>
					</Link>
				</div>
			</SubHeader>
			<TaskList>
				{tasks.map(task => (
					<Link to={`/edit/${task.id}`} key={task.id} className="task">
						<li className={task.status.replace(' ','')}>
							<strong>{task.description}</strong>
							<div className="spanDiv">
								<span>{task.status}</span>
								<span 
									className="border"
								>{task.user ? `Assinalado para ${task.user.name}` : 'Não assinalado'}
								</span>
							</div>
						</li>	
					</Link>
				))}
			</TaskList>
		</Container>
  );
}
