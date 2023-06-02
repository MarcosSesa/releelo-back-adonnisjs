import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('login', 'AuthController.login'),
    Route.post('register', 'AuthController.register'),
    Route.post('logout', 'AuthController.logout')
}).prefix('auth')

Route.get('/', ({ view }) => {
  return view
})
