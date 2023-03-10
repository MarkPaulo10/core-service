import User from '../models/users.model.js';
import BaseRouter from '../utils/BaseRouter.js';

export default class UserRouter extends BaseRouter {
    constructor() {
        super(new UserController(User));
    }
}