import Task from '../models/Task';

class TaskController {
    async store(req, res) {
        const { description, status, deadline, user_id } = req.body;

        const response = await Task.create({
            description,
            status,
            deadline,
            user_id
        });

        return res.json(response);    
    }

    async update(req, res) {
        const { description, status, deadline, user_id } = req.body;

        const task = await Task.findByPk(req.params.taskId);

        const response = await task.update({
            description,
            status,
            deadline,
            user_id,
        });

        return res.json(response);    
    }

    async index(req, res) {
        const response = await Task.findAll();

        return res.json(response);
    }
}

export default new TaskController();