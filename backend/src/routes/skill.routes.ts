import { Router } from "express"

class SkillRoutes {
  public readonly router: Router

  constructor() {
    this.router = Router()
    this.Init()
  }

  private Init() {
    this.router.get("/", (req, res) => res.send("Hello from Skill Routes"))
  }
}

export default new SkillRoutes().router
