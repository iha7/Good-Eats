import { Sequelize } from "sequelize";
import { UserFactory } from "./user";

//what is the database name
const dbName = 'userdb';
const username = 'root';
const password = 'Password1!';

const sequelize = new Sequelize(dbName, username, password, {
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
});

UserFactory(sequelize);

export const db = sequelize;