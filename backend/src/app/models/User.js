import Sequelize, { Model } from 'sequelize';

class User extends Model {
    static init(sequelize) {
        super.init(
            {
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default User;
