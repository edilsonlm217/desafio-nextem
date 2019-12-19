import * as Yup from 'yup';

import User from '../models/User';

class UserController {
    async index(req, res) {
        const response = await User.findAll();

        return res.json(response);
    }
}

export default new UserController();