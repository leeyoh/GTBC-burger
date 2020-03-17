
const db = require("../models");


module.exports = function(app){
	app.post("/api/burger",(req, res) => {
		db.burgers.create({
			burger_name: req.body.burger_name, 
			devoured: req.body.devoured
		}).then(function(dbBurger){
			res.json(dbBurger)
		})
	})

	app.put("/api/burger",(req, res) => {
		db.burgers.update(
			{devoured: true}, 
			{where: {id: req.body.id}}
			).then(function(dbBurger){
				res.json(dbBurger)
		})
	})

	app.delete("/api/burger",(req,res)=> {
		db.burgers.destroy(
			{where: {id: req.body.id}}
		).then(function(dbBurger){
			res.json(dbBurger)
		})

	})

}