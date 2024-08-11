import mongoose, { Schema } from "mongoose"

const skillSchema = new Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true }
}, { versionKey: false })

export default mongoose.model("Skill", skillSchema)
