import { DataTypes } from 'sequelize';
import BaseModel from '../utils/BaseModel.js';

export default class User extends BaseModel {
  static init() {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      {
        tableName: 'users',
      }
    );
  }
}