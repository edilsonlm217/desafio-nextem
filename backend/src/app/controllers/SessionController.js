import jwt from 'jsonwebtoken';

import User from '../models/User';

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({
            where: { email }
        })

        if (!user) {
            return res.status(401).json({ error: 'user not found'});
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'password does not match'});
        }

        const { id } = user;

        return res.json({
            user: {
                id,
                email,
            },
            token: jwt.sign({ id }, 'e1bd6ea4006cd7197fe3ab039f276376', {
                expiresIn: '7d',
            }),
        });

        return res.json({ok: true});    
    }
}

export default new SessionController();