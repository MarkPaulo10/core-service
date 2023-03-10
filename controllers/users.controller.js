import Controller from '../models/users.model.js';
import BaseController from '../utils/BaseController.js';

export default class UserController extends BaseController {
    constructor() {
        super(Controller);
    }
}