// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CategoriesController {
  public async getAll({}: HttpContextContract) {
    const categories = await .Category
  }
}
