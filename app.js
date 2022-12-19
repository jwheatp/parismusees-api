import express from "express"
import cors from "cors"

import docs from "./routes/docs.js"
import artists from "./routes/artists.js"
import paintings from "./routes/paintings.js"

const port = 3000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/docs', docs)
app.use('/v1/artists', artists)
app.use('/v1/paintings', paintings)

app.use('/', (req, res) => res.json({
  version: "0.1.0",
  message: "Documentation is available at /docs"
}))

app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint not found" })
})

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ message: err.message || "An error occured" })
})

// run the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})