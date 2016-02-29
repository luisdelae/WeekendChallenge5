myApp.controller('FavoritesController', ['$scope', 'AnimalFactory', function($scope, AnimalFactory) {
    console.log('Favorites Controller');

    $scope.animalFactory = AnimalFactory;
    $scope.faveAnimals = [];

    if($scope.animalFactory.faveAnimalData() === undefined) {
        // initial load
        console.log($scope.faveAnimals);
        $scope.animalFactory.retreiveFaveAnimals().then(function() {
            $scope.faveAnimals = $scope.animalFactory.faveAnimalData();
        });
    } else {
        $scope.faveAnimals = $scope.animalFactory.faveAnimalData();
    }

}]);
