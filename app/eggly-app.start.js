angular.module('Eggly', ['underscore'])
.controller('MainCtrl', function ($scope, _) {
    $scope.hello = 'world';
    $scope.categories = [
        {"id": 0, "name": "Development"},
        {"id": 1, "name": "Design"},
        {"id": 2, "name": "Exercise"},
        {"id": 3, "name": "Humor"}
    ];

    $scope.bookmarks = [
        {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
        {"id": 1, "title": "Egghead.io", "url": "http://egghead.io", "category": "Development" },
        {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
        {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
        {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
        {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
        {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
        {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
        {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
    ];

    //----------------------------------------------------------------
    // MODIFY MODEL VALUES ON CLICK
    //----------------------------------------------------------------

    $scope.currentCategory = $scope.categories[0];

    function setCurrentCategory(category){
        $scope.currentCategory = category;
        resetCreateForm();
    }

    $scope.setCurrentCategory = setCurrentCategory;

    //----------------------------------------------------------------
    // CREATING AND EDITING
    //----------------------------------------------------------------

    $scope.creating = false;
    $scope.editing = false;


    function isCurrentCategory(category) {
        console.log("category = " + category)
        return $scope.currentCategory !== null && $scope.currentCategory === category;
    }

    function isCreating(){
        return $scope.creating === true;
    }

    function enterCreatingMode(){
        $scope.creating = true;
        resetCreateForm();
    }

    function resetCreatingMode(){
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

    function createBookmark(bookmark){
        bookmark.id = $scope.bookmarks.length;

        $scope.bookmarks.push(bookmark);

        resetCreateForm();
    }

    $scope.createBookmark = createBookmark;

    $scope.editedBookmark = null;

    // EDIT

    function setEditedBookmark(bookmark) {
        $scope.editedBookmark = angular.copy(bookmark);
    }

    $scope.setEditedBookmark = setEditedBookmark;


    function startEditing() {
        $scope.editing = true;
    }
    $scope.startEditing = startEditing;

    function updateBookmark(bookmark) {
        var index = _.findIndex($scope.bookmarks, function (b) {
            return b.id == bookmark.id;
        });

        console.log("adfs");

        $scope.bookmarks[index] = bookmark;
        $scope.editedBookmark = null;
        $scope.editing = false;
    }

    $scope.updateBookmark = updateBookmark;



})