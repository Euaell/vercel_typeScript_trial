import dotenv from 'dotenv'
dotenv.config()

const config = {
    port: process.env.PORT || 3000,
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 27017,
        name: process.env.DB_NAME || 'test',
        uri: process.env.DB_URI || 'mongodb://localhost:27017/test'
    }
}

export default config