import { Schema, Document, model } from "mongoose"
import validator from "validator"

export interface IUser extends Document {
    name: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
}

function validateEmail(email: string): boolean {
    return validator.isEmail(email)
}

const UserSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: validateEmail,
            message: (props: any) => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: true,
        validate: {
            validator: (password: string) => {
                // TODO: must contain at least one number, one lowercase, one uppercase, one special character
                
                return password.length >= 6
            },
            message: (props: any) => `${props.value} is not a valid password!`
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

export default model<IUser>("User", UserSchema)