import express, { Express } from "express"
import mongoose from "mongoose"
import cors from "cors"
import favoriteRoutes from "./src/routes/index"

const app : Express = express()

const PORT : string | number = process.env.PORT || 3000

app.use(cors())
app.use(favoriteRoutes)

const uri : string = `${process.env.CONNECTION_STRING}`
const options = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.set("useFindAndModify", false)

mongoose
  .connect(uri, options)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })