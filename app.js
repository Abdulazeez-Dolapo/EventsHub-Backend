require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const { sequelize } = require("./models/database")

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(morgan("combined"))
app.use("/uploads", express.static("uploads"))

require("./routes")(app)
const PORT = process.env.PORT || 5000

sequelize
	.sync()
	.then(() => {
		app.listen(PORT)
		console.log(`Server started on port ${PORT}`)
	})
	.catch(err => {
		console.log(err)
	})
