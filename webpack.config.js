
const path = require("path")

module.exports = {
	entry: "./dist/main.js",
	mode: "development",
	output: {
		filename: "main.js",
		path: path.join(__dirname, "public")
	}	
}