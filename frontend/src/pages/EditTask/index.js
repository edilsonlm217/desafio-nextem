import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseISO } from 'date-fns';
import DatePicker from "react-datepicker";
import { toast } from 'react-toastify';

import api from '../../services/api';

import MainHeader from '../../components/Header';

import { Container, SubHeader, Form } from './styles';
import "react-datepicker/dist/react-datepicker.css";


export default function EditTask({ match, history }) {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [userId, setUserId] = useState('');
  const [deadline, setDeadline] = useState('');
  const [usersArray, setUsersArray] = useState([]);

  
  const Authorization = 'Bearer ' + localStorage.getItem('@nextem-app/token');

  useEffect(() => {
    async function loadForm() {
      const { taskId } = match.params;

      const response = await api.get(`/task/${taskId}`, {
        headers: {
					Authorization,
        }
      });

      const responseArray = await api.get('/users', {
        headers: {
					Authorization,
				},
      });

      setUsersArray(responseArray.data);
            
      setDescription(response.data.description);
      setStatus(response.data.status);
      setUserId(response.data.user_id);
      setDeadline(parseISO(response.data.deadline));
    }

    loadForm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    const { taskId } = match.params;

    try {
      await api.put(`task/${taskId}`, {
        description,
        status,
        deadline,
        user_id: userId,
      }, {
        headers: {
          Authorization,
        }
      });
  
      toast.success(`Task [${description}] atualizada com sucesso!`);
  
      history.push('/dashboard');
    } catch {
      toast.error('É preciso assinalar a task antes de proseguir');
    }

    

  }

  return (
    <Container>
      <MainHeader />
			<SubHeader>
				<strong>Editar tarefa</strong>
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
