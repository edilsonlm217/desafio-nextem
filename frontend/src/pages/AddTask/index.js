import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { toast } from 'react-toastify';

import api from '../../services/api';

import MainHeader from '../../components/Header';

import { Container, SubHeader, Form } from './styles';
import "react-datepicker/dist/react-datepicker.css";


export default function AddTask({ history }) {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [userId, setUserId] = useState('');
  const [deadline, setDeadline] = useState('');
  const [usersArray, setUsersArray] = useState([]);

  
  const Authorization = 'Bearer ' + localStorage.getItem('@nextem-app/token');

  useEffect(() => {
    async function loadForm() {
      const responseArray = await api.get('/users', {
        headers: {
					Authorization,
				},
      });

      setUsersArray(responseArray.data);
    }

    loadForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await api.post('task', {
      description,
      status,
      deadline,
      user_id: userId,
    }, {
      headers: {
        Authorization,
      }
    });

    toast.success(`Task [${description}] criada com sucesso!`);

    history.push('/dashboard');
  }

  return (
    <Container>
      <MainHeader />
			<SubHeader>
				<strong>Adicionar tarefa</strong>
				<div>
					<Link to="/dashboard">
						<button>VOLTAR</button>
					</Link>
				</div>
			</SubHeader>
      <Form onSubmit={handleSubmit}>
        <label>
          Descrição
          <input 
            onChange={e => setDescription(e.target.value)} 
            defaultValue={description}
            maxLength="40" 
            placeholder="Defina uma tarefa" 
          />
        </label>

        <div className="secondRow">
          <label className="responsavel">
              Assinalar para
              <select 
                value={userId ? userId : 'Selecione uma pessoa'} 
                onChange={e => setUserId(e.target.value)}
              >
                <>
                  <option value={null}>Selecione uma pessoa</option>  
                  {usersArray.map(user => (
                    <option key={user.id} value={user.id}>{user.name}</option>  
                  ))}
                </>
              </select>
          </label>
          <label className="status">
              Status
              <select 
                onChange={e => setStatus(e.target.value)}
                value={status}
              >
                <option value="Done">Done</option>
                <option value="WIP">WIP</option>
                <option value="Review">Review</option>
                <option value="To Do">To Do</option>
              </select>
          </label>
          <label className="deadline">
            Deadline
            <DatePicker 
              dateFormat='dd/MM/yyyy' 
              selected={deadline}
              onChange={date => setDeadline(date)}
              placeholderText="Selecione uma data"
            />
          </label>
        </div>
        <button 
          type="submit"
          className="save"
        >
          SALVAR
        </button>
        
      </Form>
    </Container>
  );
}
