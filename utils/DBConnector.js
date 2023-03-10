import { Sequelize } from 'sequelize';
import config from '../config/db.config.js';

const PORT = process.env.PORT || 5640;

export default class DBConnector {
  static init(app, modules) {
    const sequelize = new Sequelize(config);
    sequelize
      .authenticate()
      .then(() => {
        console.log('Database connection has been established successfully.');
      })
      .catch((error) => {
        console.error('Unable to connect to the database:', error);
      });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
}