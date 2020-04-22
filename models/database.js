const Sequelize = require("sequelize")
// const config = require("../config/config")

// var database = process.env.DATABASE_URL || 'campeonatodb'
// var sequelize = ""

// if (process.env.DATABASE_URL) {
// 	 sequelize = new Sequelize(database)
// }
// else {
// 	 sequelize = new Sequelize(database, 'postgres', '', {
// 		  dialect: 'postgres'
// 	 });
// }

const sequelize = new Sequelize(
	"heroku_d2c0257ddae8f8a",
	"ba180d07500345",
	"deddf104",
	{
		dialect: "mysql",
		host: "us-cdbr-iron-east-01.cleardb.net",
	}
)

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
