import dotenv from 'dotenv';
dotenv.config();

export default {
    hostname: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: false,
    dialect: "postgres"
};