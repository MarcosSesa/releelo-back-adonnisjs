// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { Response } from '@adonisjs/core/build/standalone'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async getAll({}: HttpContextContract) {
    const categories = await Category.all()
    Response.ok(categories)
  }
}
