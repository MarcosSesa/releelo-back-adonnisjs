// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import Book from 'App/Models/Book'
import BookValidator from 'App/Validators/BookValidator'

export default class BooksController {
  public async create({ request, response, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const data = await request.validate(BookValidator)
    const book = await Book.create(data)
    await book.related('owner').associate(user)
    return response.created(book)
  }

  public async getAll({ request, response, auth }: HttpContextContract) {
    const page = request.input('page', 1)
    const rpp = request.input('rpp', 10)
    const tickets = await Database.from('books')
  }
}
