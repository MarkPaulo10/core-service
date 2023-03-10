import { Model } from 'sequelize';

export default class BaseModel extends Model {
  static initModel(sequelize, modelName, attributes, options) {
    super.init(attributes, { sequelize, modelName, ...options });
  }
}