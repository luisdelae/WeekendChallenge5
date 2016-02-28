myApp.controller('HomeController', ['$scope', 'AnimalFactory', function($scope, AnimalFactory) {

    $scope.animalFactory = AnimalFactory;
    $scope.animalInfo = [];

    $scope.animalFinder = function() {
      console.log("clicked the random button");
      $scope.animalFactory.retrieveData($scope.animalType);
    };

    // if($scope.animalFactory.peopleData() === undefined) {
    //     // initial load
    //     $scope.animalFactory.retrieveData().then(function() {
    //         $scope.animalInfo = $scope.animalFactory.peopleData();
    //     });
    // } else {
    //     $scope.animalInfo = $scope.animalFactory.peopleData();
    // }

}]);
