// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { Request, Response } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'
import CreateBookValidator from 'App/Validators/Book/CreateBookValidator'
import BookValidator from 'App/Validators/Book/CreateBookValidator'
import EditBookValidator from 'App/Validators/Book/EditBookValidator'

export default class BooksController {
  public async create({ request, response, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const data = await request.validate(CreateBookValidator)
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

  public async delete({ request, response, bouncer, auth }: HttpContextContract) {
    await auth.authenticate()
    const book = await Book.findOrFail(request.input('id'))
    await bouncer.authorize('deleteBook', book)
    await book.delete()
    response.ok('Libro borrado correctamnete')
  }

  public async update({ bouncer, auth, request, response }: HttpContextContract) {
    await auth.authenticate()
    const data = await request.validate(EditBookValidator)
    const book = await Book.findOrFail(request.input('id'))
    await bouncer.authorize('editBook', book)
    const updatedBook = await book.merge(data).save()
    response.ok(updatedBook)
  }
}
