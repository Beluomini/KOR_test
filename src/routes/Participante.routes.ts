import * as express from 'express';
import { ParticipanteController } from '../controllers/Participante.controller';

const Router = express.Router();

Router.get('/', (req, res) => {
    ParticipanteController.getAllParticipantes(req, res);
});

Router.get('/:id', (req, res) => {
    ParticipanteController.getParticipanteById(req, res);
});

Router.post('/', (req, res) => {
    ParticipanteController.createParticipante(req, res);
});

Router.put('/:id', (req, res) => {
    ParticipanteController.updateParticipante(req, res);
});

Router.delete('/:id', (req, res) => {
    ParticipanteController.deleteParticipante(req, res);
});

export { Router as particioanteRouter };