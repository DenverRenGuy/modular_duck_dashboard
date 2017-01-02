var mongoose = require('mongoose')
var Duck = mongoose.model('Duck')

module.exports = {
    showAll: function(req, res) {
        Duck.find({}, function(err, ducks){
            console.log(ducks);
            res.render('index', {ducks:ducks});
        });
    },
    show: function(req, res){
        Duck.find({_id:req.params.id}, function(err, data){
            console.log(data);
            res.render('duck', {duck:data[0]});
        });
    },
    create: function(req, res) {
        var duck = new Duck({name: req.body.name, duckType: req.body.duckType, age: req.body.age});

        duck.save(function(err){
            if(err){
                console.log('Error saving to Database: ' + err);
                res.redirect('/');
            }
            else{
                console.log('Adding User to Database');
                res.redirect('/');
            }
        })
    },
    edit: function(req, res) {
        Duck.find({_id:req.params.id}, function(err, data){
            console.log(data);
            res.render('duckEdit', {duck:data[0]});
        })
    },
    update: function(req, res) {
        Duck.findOne({_id:req.params.id}, function(err, duck){
            console.log("Entered Update Function with id: " + duck.id + ", " + duck.name);
            duck.name = req.body.name;
            duck.duckType = req.body.duckType;
            duck.age = req.body.age;
            duck.save(function(err){
                if(err){
                    console.log('Error!' + err);
                }
                else{
                    console.log('Duck Type was saved!');
                    res.redirect('/');
                }
            })
        })
    },
    destroy: function(req, res) {
        Duck.remove({_id:req.params.id}, function(err){
            if(err){
                console.log('Pesky Duck still alive, must be an error somewhere: ' + err);
            }
            else{
                res.redirect('/');
            }
        })
    }
}
