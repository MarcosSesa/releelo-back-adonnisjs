import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CreateBookValidator {
  constructor() {}

  public schema = schema.create({
    title: schema.string({}, [rules.maxLength(50)]),
    descripcion: schema.string({}, [rules.maxLength(150)]),
    year: schema.number(),
    autor: schema.string({}, [rules.maxLength(50)]),
    category: schema.number(),
  })
}
