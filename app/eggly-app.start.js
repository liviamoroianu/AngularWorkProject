angular.module('Eggly', [
    'ui.router',
    'categories',
    'categories.bookmarks'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('eggly', {
                url: '',
                abstract: true
            })
        ;

        $urlRouterProvider.otherwise('/');
    })
    .controller('MainCtrl', function ($scope, $state) {
        $scope.hello = 'world';

        //----------------------------------------------------------------
        // MODIFY MODEL VALUES ON CLICK
        //----------------------------------------------------------------

        function setCurrentCategory(category) {
            if (category != null) {
                $scope.currentCategory = category;
                //$state.go('eggly.categories.bookmarks', {category:$scope.currentCategory.name});
            }
            resetCreateForm();
        }

        $scope.setCurrentCategory = setCurrentCategory;

        //----------------------------------------------------------------
        // CREATING
        //----------------------------------------------------------------

        $scope.creating = false;


        function isCurrentCategory(category) {
            console.log("category = " + category)
            return $scope.currentCategory !== null && $scope.currentCategory === category;
        }

        function isCreating() {
            return $scope.creating === true;
        }

        function enterCreatingMode() {
            $scope.creating = true;
            resetCreateForm();
        }

        function resetCreatingMode() {
            $scope.creating = false;
        }

        $scope.enterCreatingMode = enterCreatingMode;
        $scope.resetCreatingMode = resetCreatingMode;
        $scope.isCreating = isCreating;
        $scope.isCurrentCategory = isCurrentCategory;

        //----------------------------------------------------------------
        // CRUD
        //----------------------------------------------------------------


        // CREATE
        function resetCreateForm() {
            $scope.newBookmark = {
                title: '',
                url: '',
                category: ''
            }
        }

        function createBookmark(bookmark) {
            bookmark.id = $scope.bookmarks.length;

            $scope.bookmarks.push(bookmark);

            resetCreateForm();
        }

        $scope.createBookmark = createBookmark;

        $scope.editedBookmark = null;


    })