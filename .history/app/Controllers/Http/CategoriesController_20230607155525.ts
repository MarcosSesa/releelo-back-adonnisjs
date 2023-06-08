// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { Response } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async getAll({ response }: HttpContextContract) {
    const categories = await Category.all()
    response.ok(categories)
  }
  public async index({ request, response }: HttpContextContract) {
    const categoryId = await request.input('id')
    const category = await Category.query().where('id', categoryId)
    response.ok(category)
  }

  public async create({ auth, request, response }: HttpContextContract) {
    try {
      await auth.authenticate()
      const category = Category.create(request.input('categoryName'))
      response.ok(category)
    } catch (error) {
      response.badRequest('Invalid request', error)
    }
  }
}
