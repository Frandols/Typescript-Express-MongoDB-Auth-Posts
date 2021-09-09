import { Request, Response, NextFunction } from 'express'
import { get } from 'lodash'
import { auth } from '../utils/jwt.utils'

export default async function validateToken(req: Request, res: Response, next: NextFunction){
    const token = get(req, 'headers.authorization', '').replace(/^Bearer\s/,'')
    
    if(!token) return res.sendStatus(403)

    // @ts-ignore
    req.user = await auth(token)

    next()
}