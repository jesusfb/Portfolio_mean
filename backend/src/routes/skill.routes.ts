import { Router } from "express"
import SkillController from "../controllers/skill.controller"

class SkillRoutes {
  private readonly skillController: SkillController
  public readonly router: Router

  constructor() {
    this.skillController = new SkillController()
    this.router = Router()
    this.Init()
  }

  private Init() {
    this.router.post("/", this.skillController.Create.bind(this.skillController))
    this.router.get("/", (req, res) => res.send("Hello from Skill Routes"))
  }
}

export default new SkillRoutes().router
