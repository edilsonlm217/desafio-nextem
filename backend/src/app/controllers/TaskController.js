import * as Yup from 'yup';

import Task from '../models/Task';
import User from '../models/User';

class TaskController {
    async store(req, res) {
        const schema = Yup.object().shape({
            description: Yup.string().required(),
            status: Yup.string().required(),
            deadline: Yup.date().required(),
            user_id: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "validation failed" });
        }

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
        const schema = Yup.object().shape({
            description: Yup.string().required(),
            status: Yup.string().required(),
            deadline: Yup.date().required(),
            user_id: Yup.string().required(),
        });
        
        if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: "validation failed" });
        }

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
        const response = await Task.findAll({
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['name'],
                }
            ],
        });

        return res.json(response);
    }

    async show(req, res) {
        const response = await Task.findByPk(req.params.taskId, {
            include: [
                {
                    model: User,
                    as: 'user',
                    attributes: ['name'],
                }
            ],
        });

        return res.json(response);
    }
}

export default new TaskController();