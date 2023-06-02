import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('create', 'BooksController.create')
  Route.get('getAll', 'BooksControlles.getAll')
}).prefix('books')
