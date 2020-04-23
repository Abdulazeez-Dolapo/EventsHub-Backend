module.exports = {
	port: process.env.PORT || 5000,
	db: {
		database: process.env.DB_NAME,
		user: process.env.DB_USER,
		password: process.env.DB_PASS,
		options: {
			dialect: process.env.DB_DIALECT,
			host: process.env.DB_HOST,
		},
	},
	jwt: {
		secret: process.env.JWT_SECRET || "secret",
	},
	production: {
		use_env_variable: "DATABASE_URL",
	},
}
