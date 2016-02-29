myApp.controller('HomeController', ['$scope', 'AnimalFactory', function($scope, AnimalFactory) {

    $scope.animalFactory = AnimalFactory;
    $scope.animalInfo = {};

    $scope.animalFactory.retreiveFaveAnimals().then(function() {
        $scope.faveAnimals = $scope.animalFactory.faveAnimalData();
        $scope.favesCount = $scope.faveAnimals.length;
        console.log("Faves count in Home Controller:: ", $scope.favesCount);
    });

    $scope.animalFinder = function() {
      console.log("clicked the random button");
        $scope.animalFactory.retrieveData($scope.animalType).then(function() {
          $scope.animalInfo = $scope.animalFactory.animalData();
          console.log('Animal Info from controller:: ', $scope.animalInfo);
        });
    };

    $scope.saveAnimal = function() {
      console.log('animalInfo from saveAnimal:: ', $scope.animalInfo);
      $scope.animalFactory.addAnimal($scope.animalInfo).then(function() {
        $scope.favesCount = $scope.animalFactory.faveAnimalData().length;
      });

      alert("Saved! Look in your favorites.");

    };
}]);
