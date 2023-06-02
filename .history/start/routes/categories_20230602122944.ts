import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('all', 'CategoriesController.getAll')
  Route.get('index/:id', 'CategoriesController.index')
}).prefix('categories')
