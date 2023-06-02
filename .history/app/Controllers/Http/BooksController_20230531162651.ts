// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@adonisjs/core/build/standalone'
import Book from 'App/Models/Book'
import BookValidator from 'App/Validators/BookValidator'

export default class BooksController {
  public async create({ request, response, auth }: HttpContextContract) {
    const user = await auth.
    const data = await request.validate(BookValidator)
    const book = await Book.create(data)
    await book.related('owner').associate({ owner: user.id })
    return response.created(book)
  }
}
