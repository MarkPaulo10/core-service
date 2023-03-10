export default class BaseController {
    constructor(model) {
        this.model = model;
    }

    async getAll(req, res) {
        const items = await this.model.findAll();
        res.json(items);
    }

    async get(req, res) {
        const item = await this.model.findByPk(req.params.id);
        if (!item) {
            res.status(404).json({ error: 'Not found' });
        } else {
            res.json(item);
        }
    }

    async create(req, res) {
        const item = await this.model.create(req.body);
        res.status(201).json(item);
    }

    async update(req, res) {
        const item = await this.model.findByPk(req.params.id);
        if (!item) {
            res.status(404).json({ error: 'Not found' });
        } else {
            await item.update(req.body);
            res.json(item);
        }
    }

    async delete(req, res) {
        const item = await this.model.findByPk(req.params.id);
        if (!item) {
            res.status(404).json({ error: 'Not found' });
        } else {
            await item.destroy();
            res.status(204).end();
        }
    }
}