// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { Response } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async getAll({ response }: HttpContextContract) {
    const categories = await Category.all()
    response.ok(categories[1].categoryName)
  }
}
