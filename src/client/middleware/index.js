// Middleware
// import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const middlewares = [];
const logger = createLogger();

middlewares.push(promise, logger);

export default middlewares;
