import * as express from 'express';

const Router = express.Router();

Router.get('/', (req, res) => {
    res.send('Hello World');
});

export { Router as processoRouter };