import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import expressValidator from 'express-validator';
import expressStatusMonitor from 'express-status-monitor';
import path from 'path';
import fs from 'fs';

// Load environment variables from .env file, where API keys and passwords are configured.
dotenv.load({ path: '.env.example' });

// Express configuration.
const app = express();
app.set('port', process.env.PORT || 8080);
app.use(expressStatusMonitor());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(express.static(__dirname + '/../dist-client'));
console.log(__dirname);
console.log('../' + __dirname);

app.listen(app.get('port'), () => {
  console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env')); 
  console.log('  Press CTRL-C to stop the server\n');
});

export default app;
