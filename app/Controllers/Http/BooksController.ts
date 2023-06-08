// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from 'App/Models/Book'
import Category from 'App/Models/Category'
import CreateBookValidator from 'App/Validators/Book/CreateBookValidator'
import EditBookValidator from 'App/Validators/Book/EditBookValidator'

export default class BooksController {
  //Create  a new Book
  public async create({ request, response, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const data = await request.validate(CreateBookValidator)
    const book = await user.related('books').create(data)
    // const category = await Category.findByOrFail('id', request.input('category'))
    // await book.related('categories').attach([category.id])
    return response.created(book)
    //TODO: Add category asignation to the book
  }

  //Get all related books of a user
  public async userBooks({ response, auth }: HttpContextContract) {
    const user = await auth.authenticate()
    const books = await user.related('books').query()
    return response.created(books)
  }
  // Get a list of all book
  public async getAll({ request, response }: HttpContextContract) {
    //TODO: ADD FILTERS by filter, by category
    const page = request.input('page', 1)
    const rpp = request.input('rpp', 10)
    const books = await Book.query().paginate(page, rpp)
    return response.ok(books)
  }
  // Get an specific Book
  public async index({ request, response }: HttpContextContract) {
    const id = request.input('id')
    const book = await Book.query().where('id', id)
    return response.ok(book)
  }
  //Deletes one book
  public async delete({ request, response, bouncer, auth }: HttpContextContract) {
    await auth.authenticate()
    const book = await Book.findOrFail(request.input('id'))
    await bouncer.authorize('deleteBook', book)
    await book.delete()
    response.ok('Libro borrado correctamnete')
  }
  //Update specific Book qith the passed info
  public async update({ bouncer, auth, request, response }: HttpContextContract) {
    await auth.authenticate()
    const data = await request.validate(EditBookValidator)
    const book = await Book.findOrFail(request.input('id'))
    await bouncer.authorize('editBook', book)
    const updatedBook = await book.merge(data).save()
    response.ok(updatedBook)
  }
}
