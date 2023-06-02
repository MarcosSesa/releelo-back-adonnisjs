import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator from 'App/Validators/RegisterValidator'
import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {
  public async register({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(RegisterValidator)
    const user = await User.create(data)
    await auth.login(user)
    return response.redirect().toPath('/')
  }

  public async login({request,response,auth}: HttpContextContract) {
    const data = await
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    return response.redirect().toPath('/')
  }
}
