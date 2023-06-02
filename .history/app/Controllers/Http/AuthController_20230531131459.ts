import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator from 'App/Validators/RegisterValidator'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async register({ request, response, auth }: HttpContextContract) {
    const registerSchema = schema.create({
      username: schema.string({}, [rules.trim()]),
      email: schema.string({}, [rules.trim()]),
      password: schema.string({}, [rules.minLength(8)]),
    })
    const data = await request.validate(registerSchema)
  }

  public async login({}: HttpContextContract) {}

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    return response.redirect().toPath('/')
  }
}
