import express from "express"

import "dotenv/config"
import cors from "cors"


// API Config
const PORT = process.env.PORT || 3000
const app = express()

// Initialize Middlewares
app.use(express.json())
app.use(cors())


// API Routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(PORT, () => {
  console.log(`Sever is listening on  http://localhost:${PORT}`)
})