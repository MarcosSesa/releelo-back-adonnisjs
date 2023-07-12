import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import RegisterValidator from 'App/Validators/Auth/RegisterValidator'
import User from 'App/Models/User'
import LoginValidator from 'App/Validators/Auth/LoginValidator'

export default class AuthController {
  /**
   * Registra un nuevo usuario.
   *
   * @param {Object} ctx - El contexto de la solicitud HTTP.
   * @param {import('@ioc:Adonis/Core/HttpContext')} ctx.request - La solicitud HTTP.
   * @param {import('@ioc:Adonis/Core/HttpContext')} ctx.response - La respuesta HTTP.
   * @param {import('@ioc:Adonis/Core/HttpContext')} ctx.auth - La instancia de autenticación.
   */
  public async register({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(RegisterValidator)
    const user = await User.create(data)
    await auth.login(user)
    return response.ok('Te has registrado correctamente')
  }

  /**
   * Inicia sesión de un usuario existente.
   *
   * @param {Object} ctx - El contexto de la solicitud HTTP.
   * @param {import('@ioc:Adonis/Core/HttpContext')} ctx.request - La solicitud HTTP.
   * @param {import('@ioc:Adonis/Core/HttpContext')} ctx.response - La respuesta HTTP.
   * @param {import('@ioc:Adonis/Core/HttpContext')} ctx.auth - La instancia de autenticación.
   */
  public async login({ request, response, auth }: HttpContextContract) {
    const data = await request.validate(LoginValidator)
    try {
      const token = await auth.attempt(data.email, data.password)
      return response.ok(token)
    } catch (error) {
      return response.unauthorized('Credenciales incorrectas')
    }
  }
}
