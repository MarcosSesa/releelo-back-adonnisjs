import Bouncer from '@ioc:Adonis/Addons/Bouncer'
import Book from 'App/Models/Book'
import User from 'App/Models/User'
export const { actions } = Bouncer

export const { policies } = Bouncer.define('editPost', (user: User, book: Book) => {
  return book.userId === user.id
}).define('deletePost', (user: User, book: Book) => {
  return book.userId === user.id
})
