import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator from 'App/Validators/Auth/RegisterValidator'
import User from 'App/Models/User'
import LoginValidator from 'App/Validators/Auth/LoginValidator'

export default class AuthController {
  public async register({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(RegisterValidator)
    const user = await User.create(data)
    await auth.login(user)
    return response.ok('Te has registrado correctamente')
  }

  public async login({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(LoginValidator)
    try {
      const token = await auth.attempt(data.email, data.password)
      return response.ok(token)
    } catch (error) {
      return response.unauthorized('Credenciales incorrectas')
    }
  }

  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    return response.ok('Te has deslogueado satisfactoriamente')
  }
}
