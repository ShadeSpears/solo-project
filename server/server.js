const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
// Change the app.use(cors()) to the one below


const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());
app.use(express.urlencoded({extend:true}));
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));


require("./config/mongoose.config");
require("./routes/chore.routes")(app);
require("./routes/user.routes")(app);
require('dotenv').config();

app.listen(8000, () => {
    console.log("Listening on Port 8000");
})