import { Request, Response } from 'express'
import { createUser, getUser, getUsers } from '../service/user.service'
import { validateUser } from '../service/user.service'
import { sign } from '../utils/jwt.utils'
import { omit, get } from 'lodash'

export async function createUserHandler(req: Request, res: Response){
    try{
        const user = createUser(req.body)
        return res.status(201).send(omit((await user).toJSON(), 'password'))
    } catch(error: any){
        return res.status(400).send(error.message)
    }
}
export async function createUserTokenHandler(req: Request, res: Response){
    try{
        const user = await validateUser(req.body)

        if(!user) return res.status(400).send('Invalid email or password.')

        const accessToken = sign(user._id.toString())

        return res.status(200).send({accessToken})
    } catch(error: any){
        return res.status(400).send(error.message)
    }
}
export async function getUserHandler(req: Request, res: Response){
    try{
        const id = get(req, 'user') || get(req, 'params.id')
        const user = await getUser(id)

        if(!user) return res.sendStatus(404)

        return res.status(200).send(
            {
                user: omit(
                    user.toJSON(), 
                    'password', 'createdAt', 'updatedAt'
                )
            }
        )
    } catch(error: any){
        return res.status(400).send(error.message)
    }
}
export async function getUsersHandler(req: Request, res: Response){
    try{
        const users = await getUsers()

        return res.status(200).send({users})
    } catch(error: any){
        return res.status(400).send(error.message)
    }
}