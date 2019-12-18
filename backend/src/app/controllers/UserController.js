import User from '../models/User';

class UserController {
    async show(req, res) {
        return res.json({ok: true});    
    }
}

export default new UserController();