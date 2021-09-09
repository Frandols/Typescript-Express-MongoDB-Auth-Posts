import { Express } from 'express'
import validateSchema from './middlewares/validateSchema'
import validateToken from './middlewares/validateToken'
import { createPostHandler, getPostHandler, getPostsHandler } from './controllers/post.controller'
import { createUserHandler, createUserTokenHandler, getUserHandler, getUsersHandler } from './controllers/user.controller'
import { createUserSchema, createUserTokenSchema } from './schemas/user.schema'
import { createPostSchema } from './schemas/post.schema'

export default function(app: Express){
    app.get(
        '/api/',
        validateToken,
        getUserHandler
    )
    app.post(
        '/api/users',
        validateSchema(createUserSchema),
        createUserHandler
    )
    app.post(
        '/api/tokens',
        validateSchema(createUserTokenSchema),
        createUserTokenHandler
    )
    app.post(
        '/api/posts',
        [validateToken, validateSchema(createPostSchema)],
        createPostHandler
    )
    app.get(
        '/api/users',
        getUsersHandler
    )
    app.get(
        '/api/posts',
        getPostsHandler
    )
    app.get(
        '/api/users/:id',
        getUserHandler
    )
    app.get(
        '/api/posts/:id',
        getPostHandler
    )
}