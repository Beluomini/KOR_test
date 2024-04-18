import * as express from 'express';
import { ProcessoController } from '../controllers/Processo.controller';

const Router = express.Router();

Router.post('/', (req, res) => {
    ProcessoController.createProcesso(req, res);
});

export { Router as processoRouter };