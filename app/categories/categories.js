angular.module('categories', [
    'eggly.models.categories'
])
    .config(function($stateProvider){
        $stateProvider
            .state('eggly.categories', {
                url: '/',
                views: {
                    'categories@': {
                        controller: 'CategoriesListCtrl as categoriesListCtrl',
                        templateUrl: 'app/categories/categories.tmpl.html'
                    }/*,
                    'bookmarks@': {
                        controller: 'BookmarksCtrl',
                        templateUrl: 'app/categories/bookmarks/bookmarks.tmpl.html'
                    }*/
                }
            })
        ;
    })
    .controller('CategoriesListCtrl', function (CategoriesModel){
        var categoriesListCtrl = this;
        categoriesListCtrl.categories = CategoriesModel.getCategories();
    })
;