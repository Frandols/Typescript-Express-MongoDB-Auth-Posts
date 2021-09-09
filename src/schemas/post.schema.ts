import { object, string } from 'yup'
import { createPost } from '../service/post.service'

export const createPostSchema = object({
    body: object({
      title: string().required("Title is required"),
      body: string()
        .required("Body is required")
        .min(15, "Body is too short - should be 15 chars minimum."),
    }),
})