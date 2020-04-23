const Sequelize = require("sequelize")
const config = require("../config/config")

// const sequelize = new Sequelize(
// 	"heroku_d2c0257ddae8f8a",
// 	"ba180d07500345",
// 	"deddf104",
// 	{
// 		dialect: "mysql",
// 		host: "us-cdbr-iron-east-01.cleardb.net",
// 	}
// )

const sequelize = new Sequelize(
	config.db.database,
	config.db.user,
	config.db.password,
	config.db.options
)

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
