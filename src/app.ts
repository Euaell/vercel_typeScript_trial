import express from "express"
import cors from "cors"
import ErrorHandler from "./middleware/ErrorHandler"
import route from "./routes"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", route.HomeRoute)

app.use(ErrorHandler)

export default app