// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'


export default class AuthController {
  public async register({}: HttpContextContract){}
  public async login({}: HttpContextContract){}
  public async logout({response, auth }: HttpContextContract){
    await auth.logout()
    return response.redirec
  }


}
