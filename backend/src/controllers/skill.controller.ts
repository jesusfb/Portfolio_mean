import { Request, Response } from "express"
import Skill from "../models/skill"

class SkillController {
  async Create(req: Request, res: Response) {
    const skill = new Skill(req.body)
    try {
      await skill.save()
      res.status(201).send(skill)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async All(req: Request, res: Response) {
    try {
      const skills = await Skill.find()
      res.status(200).send(skills)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async UpdateOne(req: Request, res: Response) {
    try {
      const skill = await Skill.findById(req.body._id)
      if (skill != null) {
        skill.set(req.body)
        await skill.save()
        res.status(200).send(skill)
      }
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }

  async DeleteOne(req: Request, res: Response) {
    try {
      const skill = await Skill.findByIdAndDelete(req.params.id)
      if (skill != null) {
        res.status(200).send(skill)
      }
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
}

export default SkillController
