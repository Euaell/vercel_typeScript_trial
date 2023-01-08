import mongoose from "mongoose"
import app from "./app"
import configs from "./config"

mongoose.set('strictQuery', true);
mongoose.connect(configs.db.uri) 
.then(() => {
    console.log("Connected to database...")
    app.listen(configs.port, () => {
        console.log("Server started on port 3000...")
    })
})
.catch((err) => {
    console.error("Error connecting to database: " + err.message)
})