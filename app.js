// Imports
let express = require('express')
let apiRoutes = require("./api_routes")
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

let app = express();

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGODB_URL ?? 'mongodb://localhost/users';


mongoose.connect(mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then(console.log("Connecting to MongoDB"));

if (!mongoose.connection)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");

app.get('/', (req, res) => {
    res.json({
        status: "success",
        message: "Welcome to CS3219 Task B done by Marcus. Use /api to use the Random User API:)"
    })
})
app.use('/api', apiRoutes);

module.exports = app;