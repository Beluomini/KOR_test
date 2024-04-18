import * as express from 'express';
import { ClienteController } from '../controllers/Cliente.controller';

const Router = express.Router();

Router.get('/', (req, res) => {
    ClienteController.getAllClientes(req, res);
});

Router.get('/:id', (req, res) => {
    ClienteController.getClienteById(req, res);
});

Router.post('/', (req, res) => {
    ClienteController.createCliente(req, res);
});

Router.put('/:id', (req, res) => {
    ClienteController.updateCliente(req, res);
});

Router.delete('/:id', (req, res) => {
    ClienteController.deleteCliente(req, res);
});

export { Router as clienteRouter };