import express from "express"
import cors from "cors"
import ErrorHandler from "./middleware/ErrorHandler"
import route from "./routes"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", route.HomeRoute)
app.get("/api/v1/", route.HomeRoute)
app.use("/api/v1/users", route.UserRoute)
app.use("/api/v1/characters", route.CharactersRoute)
app.use("/api/v1/episodes", route.EpisodesRoute)

app.use(ErrorHandler)

export default app