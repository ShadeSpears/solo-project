const mongoose = require("mongoose");

const choreDB = "choreDBnew";

mongoose.connect(`mongodb://localhost/${choreDB}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log(`You are connected to the database called ${choreDB}`)
    })
    .catch((err) => {
        console.log(`you had a problem connecting the ${dbName}. Here is your error:`, err)
    })