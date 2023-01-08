import dotenv from 'dotenv'
dotenv.config()

const config = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 27017,
        name: process.env.DB_NAME || 'test',
        uri: process.env.MONGODB_URI || "mongodb+srv://client2:J9f3Ct0pcV9apOwM@geek.ps9eo.mongodb.net/trail?retryWrites=true&w=majority"
    }
}

export default config