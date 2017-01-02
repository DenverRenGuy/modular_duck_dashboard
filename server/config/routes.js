var ducks = require('../controllers/ducks.js');

module.exports = function(app) {
    app.get('/', function(req, res){
        ducks.showAll(req, res);
    })
    app.get('/ducks/:id', function(req, res){
        ducks.show(req, res);
    })
    app.get('/new', function(req, res) {
        res.render('newDuck');
    })
    app.post('/ducks', function(req, res) {
        ducks.create(req, res);
    })
    app.get('/ducks/:id/edit', function(req, res) {
        ducks.edit(req, res);
    })
    app.post('/ducks/:id/edit', function (req, res) {
        ducks.update(req, res);
    })
    app.post('/ducks/:id/destroy', function(req, res) {
        ducks.destroy(req, res);
    })
}
