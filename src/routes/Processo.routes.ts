import * as express from 'express';
import { ProcessoController } from '../controllers/Processo.controller';

const Router = express.Router();

Router.get('/', (req, res) => {
    ProcessoController.getAllProcessos(req, res);
});

Router.get('/:id', (req, res) => {
    ProcessoController.getProcessoById(req, res);
});

Router.post('/', (req, res) => {
    ProcessoController.createProcesso(req, res);
});

Router.put('/:id', (req, res) => {
    ProcessoController.updateProcesso(req, res);
});

Router.delete('/:id', (req, res) => {
    ProcessoController.deleteProcesso(req, res);
});

export { Router as processoRouter };