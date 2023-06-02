import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('all', 'CategoriesController.getAll')
}).prefix('categories')
