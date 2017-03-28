// Grabbing our models

var db = require("../models");


module.exports = function(app) {

    // GET route for getting all of the todos
    app.get("/", function(req, res) {
        db.CraveFood.findAll({}).then(function(dish) {
            // console.log(results);
            // res.json(results);
            res.render("index",{dish});
        });

    });

    // POST route for saving a new todo. You can create a todo using the data on req.body
    app.post("/", function(req, res) {
        db.CraveFood.create({
            dish_name: req.body.dish,            
        }).then(function(results) {
            // res.json(results);
            res.redirect("/");
        });

    });  



    // PUT route for updating. The updated todo will be available in req.body
    app.put("/:id", function(req, res) {
        db.CraveFood.update({            
            devoured: true
        }, { where: { id: req.params.id } }).then(function(updateRow) {
            console.log("Data updated");
            res.redirect("/");
        })

    });

};