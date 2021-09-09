import config from 'config'
import jwt from 'jsonwebtoken'
import User from '../models/user.model'

const privateKey = config.get('privateKey') as string

export function sign(object: Object, options?: jwt.SignOptions | undefined) {
    return jwt.sign(object, privateKey, options)
}
export function auth(token: string){
    return jwt.verify(token, privateKey, async (_, id) => id)
}