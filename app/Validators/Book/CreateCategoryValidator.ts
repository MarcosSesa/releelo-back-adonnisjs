import { schema, rules } from '@ioc:Adonis/Core/Validator'

export default class CreateCategoryValidator {
  constructor() {}

  public schema = schema.create({
    categoryName: schema.string({}, [rules.maxLength(50)]),
  })
}
