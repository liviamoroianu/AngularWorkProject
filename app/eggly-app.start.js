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
    .controller('MainCtrl', function ($scope) {
        $scope.hello = 'world';
        $scope.categories = [
            {"id": 0, "name": "Development"},
            {"id": 1, "name": "Design"},
            {"id": 2, "name": "Exercise"},
            {"id": 3, "name": "Humor"}
        ];

        $scope.bookmarks = [
            {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
            {"id": 1, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development"},
            {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design"},
            {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design"},
            {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise"},
            {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise"},
            {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor"},
            {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor"},
            {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor"}
        ];

        //----------------------------------------------------------------
        // MODIFY MODEL VALUES ON CLICK
        //----------------------------------------------------------------

        $scope.currentCategory = $scope.categories[0];

        function setCurrentCategory(category) {
            if (category != null) {
                $scope.currentCategory = category;
            }else {
                $scope.currentCategory = $scope.categories[0];
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
                category: $scope.currentCategory.name
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