import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/task', TaskController.store);
routes.put('/task/:taskId', TaskController.update);
routes.get('/task/:taskId', TaskController.show);
routes.get('/task', TaskController.index);

export default routes;