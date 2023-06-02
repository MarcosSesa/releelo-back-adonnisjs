import Bouncer from '@ioc:Adonis/Addons/Bouncer'
export const { actions } = Bouncer

export const { policies } = Bouncer.define('viewPost', (user: User, post: Post) => {
  return post.userId === user.id
})
  .define('editPost', (user: User, post: Post) => {
    return post.userId === user.id
  })
  .define('deletePost', (user: User, post: Post) => {
    return post.userId === user.id && post.status !== 'published'
  })
