import { Request, Response } from 'express'
import { get } from 'lodash'
import { createPost, getPost, getPosts } from '../service/post.service'

export async function createPostHandler(req: Request, res: Response){
    try{
        const body = get(req, 'body')
        const id = get(req, 'user')

        const post = await createPost({...body, user: id})

        return res.status(201).send(post)
    } catch(error: any){
        return res.status(400).send(error.message)
    }
}
export async function getPostHandler(req: Request, res: Response){
    try{
        const id = get(req, 'params.id')
        const post = await getPost(id)

        if(!post) return res.sendStatus(404)

        return res.status(200).send({post})
    } catch(error: any){
        return res.status(400).send(error.message)
    }
}
export async function getPostsHandler(req: Request, res: Response){
    try{
        const posts = await getPosts()

        return res.status(200).send({posts})
    } catch(error: any){
        return res.status(400).send(error.message)
    }
}