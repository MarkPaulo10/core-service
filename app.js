import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import bodyParser from 'body-parser';
import { readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import dotenv from 'dotenv';
import DBConnector from './utils/DBConnector.js';

dotenv.config();

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));
app.use(fileUpload());

const root = '/v1.0/api';

// Initialize routes
const routeDirectory = path.join(__dirname, 'routes');
readdirSync(routeDirectory).forEach(async file => {
  if (file.match(/\.js$/)) {
    const { default: router } = await import(`./routes/${file}`);
    app.use(`${root}/${file}`, router);
    console.log('\x1b[34m%s\x1b[0m', `Initializing endpoint: ${root}/${file}`);
  }
});

DBConnector.init(app);