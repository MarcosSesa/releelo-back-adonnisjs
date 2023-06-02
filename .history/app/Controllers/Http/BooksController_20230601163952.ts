// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
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

  public async getAll({ request, response }: HttpContextContract) {
    const page = request.input('page', 1)
    const rpp = request.input('rpp', 10)
    //TODO const filter = request.input('filter', '')
    const books = await Book.query().paginate(page, rpp)
    return response.ok(books)
  }
  public async index({ request, response }: HttpContextContract) {
    const id = request.input('id')
    const book = await Book.query().where('id', id)
    return response.ok(book)
  }

  public async delete({ request, response }: HttpContextContract) {
    const id = request.input('id')
    const book = await Book.query().where('id', id)
    return response.ok(book)
  }
}
