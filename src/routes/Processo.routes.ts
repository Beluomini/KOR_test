import * as express from 'express';
import { ProcessoController } from '../controllers/Processo.controller';

const Router = express.Router();

Router.get('/todos', (req, res) => {
    ProcessoController.getAllProcessos(req, res);
});

Router.get('/:id', (req, res) => {
    ProcessoController.getProcessoById(req, res);
});

Router.get('/', (req, res) => {
    ProcessoController.getProcessoByClienteAndParticipante(req, res);
});

Router.get('/:id/participantes', (req, res) => {
    ProcessoController.getProcessoParticipantes(req, res);
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