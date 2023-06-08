import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('all', 'CategoriesController.getAll')
  Route.get('index', 'CategoriesController.index')
  Route.post('create', 'CategoriesController.create')
}).prefix('categories')
