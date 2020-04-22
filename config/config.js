module.exports = {
	port: process.env.PORT || 5000,
	db: {
		database: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		options: {
			dialect: process.env.DB_DIALECT || "mysql",
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			storage: "./event_mgt.sql",
		},
	},
	jwt: {
		secret: process.env.JWT_SECRET || "secret",
	},
	production: {
		use_env_variable: "DATABASE_URL",
	},
}
