import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateBookValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({}, [rules.maxLength(50)]),
    descripcion: schema.string({}, [rules.maxLength(150)]),
    year: schema.number(),
    autor: schema.string({}, [rules.maxLength(50)]),
    userId: schema.number(),
  })
}
