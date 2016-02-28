myApp.factory('AnimalFactory', ['$http', function($http) {

  var animalInfo;
  var key;
  var baseURL;
  var query1;
  var request1;
  var faveAnimals;

    var getData = function(animalType) {
      key = '8c5651bb1f65ed3b8e5163969b917f60';
      baseURL = 'http://api.petfinder.com/';
      query1 = 'pet.getRandom';
      query1 += '?key=' + key;
      query1 += '&animal=' + animalType;
      query1 += '&output=basic';
      query1 += '&format=json';
      request1 = baseURL + encodeURI(query1) + '&callback=JSON_CALLBACK';
      console.log('url sent to API:: ', request1);
      var promise = $http.jsonp(request1).then(
        function(response) {
          animalInfo = response.data.petfinder.pet;
          console.log('Async data response:', animalInfo);
      });

        return promise;
    };


// function to get saved animals from database
    var getAnimals = function() {
        console.log('getting data from DB');
        var promise = $http.get('/data').then(function(response) {
            faveAnimals = response.data;
            console.log('Async data response:', faveAnimals);
        });

        return promise;
    };

//function to store an animal to the database. will work on after getting from DB.
    // var addPerson = function(name) {
    //   //will have to add logic to add the new entry to the DB
    //     people.push(name);
    // };

    //PUBLIC
    var publicApi = {
      animalData: function() {
        return animalInfo;
      },
      retrieveData: function(animalType) {
          return getData(animalType);
      },
      faveAnimalData: function() {
        return faveAnimals;
      },
      retreiveFaveAnimals: function(){
        return getAnimals();
      }
      // //change this to addAnimal
      // addName: function(name) {
      //   addPerson(name);
      // }
    };

    return publicApi;


  // $scope.data = {};
  //
  // function animalFinder() {
  //   var animalType = animalType;
  //
  //
  //
  //   $http.jsonp(request1).then(
  //     function(response) {
  //       var resObj= response.data.petfinder.pet;
  //       var shelterId;
  //       console.log(resObj);
  //       $scope.animalpicture = resObj.media.photos.photo[2].$t;
  //       $scope.animalname = resObj.name.$t;
  //       $scope.animalage = resObj.age.$t;
  //       $scope.animalbreed = resObj.breeds.breed.$t;
  //       $scope.animalsex = resObj.sex.$t;
  //       $scope.animaldescription = resObj.description.$t;
  //       shelterId = resObj.shelterId.$t;
  //
  //       console.log(shelterId);
  //
  //       var query2 = 'shelter.get';
  //       query2 += '?key=' + key;
  //       query2 += '&id=' + shelterId;
  //       query2 += '&format=json';
  //
  //       var request2 = baseURL + encodeURI(query2) + '&callback=JSON_CALLBACK';
  //       $http.jsonp(request2).then(
  //         function(response) {
  //           $scope.sheltername = response.data.petfinder.shelter.name.$t;
  //         });
  //     }
  //   );
  // }

}]);
