import Post from 'App/Models/Post'
import User from 'App/Models/User'

export const { actions } = Bouncer.define('viewPost', (user: User, post: Post) => {
  return post.userId === user.id
})
