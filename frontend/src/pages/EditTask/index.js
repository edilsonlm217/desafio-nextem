import React from 'react';
import { Link } from 'react-router-dom';

import MainHeader from '../../components/Header';
import DatePicker from '../../components/DatePicker';

import { Container, SubHeader, Form } from './styles';


export default function EditTask() {
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
      <Form>
        <label>
          Descrição
          <input placeholder="Qual a tarefa?" />
        </label>

        <div className="secondRow">
          <label className="responsavel">
              Assinalar para
              <select>
                <option value="null"></option>
                <option value="Edilson Lima">Edilson Lima</option>
                <option value="Hemilly Júlia">Hemilly Júlia</option>
                <option value="Moany Rocha">Moany Rocha</option>
                <option value="Tereza Chagas">Tereza Chagas</option>
              </select>
          </label>
          <label className="status">
              Status
              <select>
                <option value="Em aberto">Em aberto</option>
                <option value="Done">Done</option>
                <option value="WIP">WIP</option>
                <option value="Review">Review</option>
                <option value="ToDo">To Do</option>
              </select>
          </label>
          <label className="deadline">
            Deadline
            <DatePicker />
          </label>
        </div>
        <button className="save">SALVAR</button>
        
      </Form>
    </Container>
  );
}
