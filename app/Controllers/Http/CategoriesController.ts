// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'
import CreateCategoryValidator from 'App/Validators/Book/CreateCategoryValidator'

export default class CategoriesController {
  /**
   * Obtiene todas las categorías.
   *
   * @param {Object} ctx - El contexto de la solicitud HTTP.
   * @param {import('@ioc:Adonis/Core/HttpContext')} ctx.response - La respuesta HTTP.
   */
  public async getAll({ response }: HttpContextContract) {
    const categories = await Category.all()
    response.ok(categories)
  }

  /**
   * Obtiene una categoría por su ID.
   *
   * @param {Object} ctx - El contexto de la solicitud HTTP.
   * @param {import('@ioc:Adonis/Core/HttpContext')} ctx.request - La solicitud HTTP.
   * @param {import('@ioc:Adonis/Core/HttpContext')} ctx.response - La respuesta HTTP.
   */
  public async index({ request, response }: HttpContextContract) {
    const categoryId = await request.input('id')
    const category = await Category.query().where('id', categoryId)
    response.ok(category)
  }

  /**
   * Crea una nueva categoría.
   *
   * @param {Object} ctx - El contexto de la solicitud HTTP.
   * @param {import('@ioc:Adonis/Core/HttpContext')} ctx.auth - La instancia de autenticación.
   * @param {import('@ioc:Adonis/Core/HttpContext')} ctx.request - La solicitud HTTP.
   * @param {import('@ioc:Adonis/Core/HttpContext')} ctx.response - La respuesta HTTP.
   */
  public async create({ auth, request, response }: HttpContextContract) {
    await auth.authenticate()
    const data = await request.validate(CreateCategoryValidator)
    Category.create(data).then((cat: Category) => {
      response.created(cat)
    })
  }
}
