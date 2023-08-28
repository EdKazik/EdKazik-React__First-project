const express = require('express');
const router = express.Router();
const controller = require('./login.controller');

router.get('/', function(req, res, next) {
    res.send( 'SERVER IS ACTIVE'  );
});

router.post('/login', controller.getLogin)

router.get('/login', function(request, response, next) {
        response.send({ ...request.body})
})


module.exports = router;