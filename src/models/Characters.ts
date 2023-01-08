import { Schema, Document, model } from "mongoose"

export interface ICharacter extends Document {
    actualName: string
    characterName: string
    description: string
    image: string
}

const CharacterSchema: Schema<ICharacter> = new Schema({
    actualName: {
        type: String,
        required: true
    },
    characterName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

export default model<ICharacter>("Character", CharacterSchema)