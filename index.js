const http = require('http')
const app = require('./app')

const server = http.createServer(app)
const PORT = parseInt(process.env.PORT, 10) || 9000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

module.exports = server

const gcloud_api = "https://cs3219taskb-m4jbzqtwiq-de.a.run.app/";

const heroku_api = "https://random-asian-user-api.herokuapp.com/";