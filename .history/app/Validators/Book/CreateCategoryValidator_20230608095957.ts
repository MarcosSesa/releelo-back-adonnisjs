import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateCategoryValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    categoryName: schema.string({}, [rules.maxLength(50)]),
  })
}
