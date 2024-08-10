import express, { Application } from "express"
import { PrismaClient } from "@prisma/client"
import skillRoutes from "./routes/skill.routes"

class App {
  private readonly app: Application
  private readonly port: number
  private readonly prisma: PrismaClient

  constructor() {
    this.app = express()
    this.port = parseInt(process.env.PORT || "3000")
    this.prisma = new PrismaClient()
    this.Init()
  }


  private Init() {
    this.InitMiddlewares()
    this.InitRoutes()
  }

  private InitMiddlewares() {
  }

  private InitRoutes() {
    this.app.use("/api/skills", skillRoutes)
  }

  public Start() {
    this.app.listen(this.port, () => {
      console.log(`[server] Server is running at http://localhost:${this.port}`)
    })
    //this.prisma.$disconnect()
  }
}

export default App
