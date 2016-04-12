import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import router from './router/index';

let app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

app.use('/', router);

app.use((req, res, next) => {
    let error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res) => {
    let env = app.get('env');

    res.status(error.status || 500)
        .json({
            message: error.message || 'Internal Error',
            error: (env === 'development') ? error : null
        });
});

export default app;