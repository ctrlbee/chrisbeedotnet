'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _expressValidator = require('express-validator');

var _expressValidator2 = _interopRequireDefault(_expressValidator);

var _expressStatusMonitor = require('express-status-monitor');

var _expressStatusMonitor2 = _interopRequireDefault(_expressStatusMonitor);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Load environment variables from .env file, where API keys and passwords are configured.
_dotenv2.default.load({ path: '.env.example' });

// Express configuration.
var app = (0, _express2.default)();
app.set('port', process.env.PORT || 8080);
app.set('views', _path2.default.join(__dirname, 'views'));
app.use((0, _expressStatusMonitor2.default)());
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _expressValidator2.default)());
app.use(_express2.default.static(__dirname + '/../client'));
console.log(__dirname);
console.log('../' + __dirname);

app.listen(app.get('port'), function () {
  console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));

  console.log('  Press CTRL-C to stop\n');
});

exports.default = app;