import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('create', 'BooksController.create')
  Route.get('all', 'BooksController.getAll')
}).prefix('books')
