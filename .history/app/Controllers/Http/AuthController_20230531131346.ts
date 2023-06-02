import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator from 'App/Validators/RegisterValidator'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'

export default class AuthController {
  public async register({ request, response, auth }: HttpContextContract) {
    const registerSchema = schema.create({
      username: schema.string({}, [rules.trim()]),
      email: schema.string({}, [rules.trim()]),
    })
    const data = await request.validate(RegisterValidator)
  }

  public async login({}: HttpContextContract) {}

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    return response.redirect().toPath('/')
  }
}
