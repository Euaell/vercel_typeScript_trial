import { Schema, Document, model } from 'mongoose'

export interface IEpisode extends Document {
    title: string
    description: string
    url: string
    image: string
}

const EpisodeSchema: Schema<IEpisode> = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }
})

export default model<IEpisode>('Episode', EpisodeSchema)