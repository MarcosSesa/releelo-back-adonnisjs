import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.post('create', 'BooksController.create')
  Route.get('all', 'BooksController.getAll')
  Route.get('index', 'BooksController.index')
  Route.delete('delete', 'BooksController.delete')
}).prefix('books')
