myApp.controller('HomeController', ['$scope', 'AnimalFactory', function($scope, AnimalFactory) {

    $scope.animalFactory = AnimalFactory;
    $scope.animalInfo = {};

    $scope.animalFinder = function() {
      console.log("clicked the random button");
      // if($scope.animalFactory.animalData() === undefined) {
        $scope.animalFactory.retrieveData($scope.animalType).then(function() {
        $scope.animalInfo = $scope.animalFactory.animalData();
        console.log('Animal Info from controller:: ', $scope.animalInfo);
        });
      // } else {
        // console.log("executed the else part of the aninalFinder function!")
        //   $scope.animalInfo = $scope.animalFactory.animalData();
      // }
    };

    $scope.saveAnimal = function() {
      console.log('animalInfo from saveAnimal:: ', $scope.animalInfo);
      $scope.animalFactory.addAnimal($scope.animalInfo);
    };
}]);
