import express from 'express';
import BaseController from '../utils/BaseController.js';

export default class BaseRouter {
    constructor(controller) {
        this.controller = controller;
        this.router = express.Router();
        this.setupRoutes();
    }

    getRouter() {
        return this.router;
    }

    setupRoutes() {
        this.router.get('/', this.controller.getAll.bind(this.controller));
        this.router.get('/:id', this.controller.get.bind(this.controller));
        this.router.post('/', this.controller.create.bind(this.controller));
        this.router.put('/:id', this.controller.update.bind(this.controller));
        this.router.delete('/:id', this.controller.delete.bind(this.controller));
    }
}