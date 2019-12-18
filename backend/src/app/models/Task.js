import Sequelize, { Model } from 'sequelize';

class Task extends Model {
    static init(sequelize) {
        super.init(
            {
                description: Sequelize.STRING,
                status: Sequelize.STRING,
                deadline: Sequelize.DATE,
            },
            {
                sequelize,
            }
        );
        return this;
    }

    static associate(models) {
        this.belongsTo(models.User, {
            constraints: false,
            foreignKey: 'user_id',
            as: 'user',
        });
      }
}''

export default Task;
