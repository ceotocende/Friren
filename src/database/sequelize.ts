import { Sequelize } from "sequelize";

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: './src/database/database.db'
})

export default sequelize;