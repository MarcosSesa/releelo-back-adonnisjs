import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(private ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({}, [rules.maxLength(50)]),
    description: schema.string({}, [rules.maxLength(150)]),
    year: schema.number({}, [rules.maxLength(150)]),
  })
}
