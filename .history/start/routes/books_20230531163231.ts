import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('create', 'BooksController.create')
}).prefix('books')
