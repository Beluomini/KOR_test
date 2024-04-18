import * as express from 'express';
import { ParticipanteController } from '../controllers/Participante.controller';

const Router = express.Router();

Router.post('/', (req, res) => {
    ParticipanteController.createParticipante(req, res);
});

export { Router as particioanteRouter };