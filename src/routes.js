const express = require('express');
const multer = require('multer');

const SessionController     = require('./controllers/SessionController');
const CardController        = require('./controllers/CardController');
const CategoryController    = require('./controllers/CategoryController');
const AccountController     = require('./controllers/AccountController');
const PocketGuideController = require('./controllers/PocketGuideController');

const routes = express.Router();

routes.post( '/category', CategoryController.store );
routes.post( '/sessions', SessionController.store );
routes.post( '/card', CardController.store );
routes.post( '/account', AccountController.store );
routes.post( '/pocketGuide', PocketGuideController.store );

module.exports = routes; 
