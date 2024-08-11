import express, { Application } from "express"
import skillRoutes from "./routes/skill.routes"
import mongoose from "mongoose"

class App {
  private readonly app: Application
  private readonly port: number

  constructor() {
    this.app = express()
    this.port = parseInt(process.env.PORT || "3000")
    this.Init()
  }

  public Start() {
    this.app.listen(this.port, () => {
      console.log(`[server] Server is running at http://localhost:${this.port}`)
    })
  }

  private Init() {
    this.InitMiddlewares()
    this.InitRoutes()
    this.db()
  }

  private InitMiddlewares() {
    this.app.use(express.json())
  }

  private InitRoutes() {
    this.app.use("/api/skills", skillRoutes)
  }

  async db() {
    try {
      await mongoose.connect("mongodb://localhost:27017/angelmaldonado")
      console.log("[db] MongoDB is connected")
    } catch (error) {
      console.error("[db] Error connecting to MongoDB")
      console.error(error)
    }
  }
}

export default App
