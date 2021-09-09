require('dotenv').config()
import jwt from 'jsonwebtoken'

const privateKey = process.env.PRIVATE_KEY as string

export function sign(object: Object, options?: jwt.SignOptions | undefined) {
    return jwt.sign(object, privateKey, options)
}
export function auth(token: string){
    return jwt.verify(token, privateKey, async (_, id) => id)
}