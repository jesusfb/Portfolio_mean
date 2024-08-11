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
    this.router.get("/", this.skillController.All.bind(this.skillController))
    this.router.post("/", this.skillController.Create.bind(this.skillController))
    this.router.put("/", this.skillController.UpdateOne.bind(this.skillController))
    this.router.delete("/", this.skillController.DeleteOne.bind(this.skillController))
  }
}

export default new SkillRoutes().router
