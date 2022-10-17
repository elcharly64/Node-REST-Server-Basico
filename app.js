
import dotenv from 'dotenv';
import * as servidor from './models/server.js';

dotenv.config();

const server = new servidor.Server();

server.listen();

