import { Request, Response } from "express"
import Skill from "../models/skill"

class SkillController {
  async Create(req: Request, res: Response) {
    const skill = new Skill(req.body)
    await skill.save()
    res.status(201).send(skill)
    try {
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}

export default SkillController
