import { DocumentDefinition } from 'mongoose'
import Post, { PostDocument } from '../models/post.model'

export function createPost(input: DocumentDefinition<PostDocument>) {
    return Post.create(input);
}
export async function getPost(id: string){
  return await Post.findOne({ postId: id })
}
export async function getPosts(){
  return await Post.find()
}