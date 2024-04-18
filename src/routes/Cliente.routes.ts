import * as express from 'express';
import { ClienteController } from '../controllers/Cliente.controller';

const Router = express.Router();

Router.get('/', (req, res) => {
    ClienteController.getAllClientes(req, res);
});

Router.post('/', (req, res) => {
    ClienteController.createCliente(req, res);
});

export { Router as clienteRouter };