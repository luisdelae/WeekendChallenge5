myApp.factory('AnimalFactory', ['$http', function($http) {

  var animalInfo = undefined;
  var key;
  var baseURL;
  var query1;
  var request1;
  var faveAnimals;
  var favesCount;

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

    var getAnimals = function() {
        console.log('getting data from DB');
        var promise = $http.get('/data').then(function(response) {
            faveAnimals = response.data;
            console.log('Async data response:', faveAnimals);
        });
        return promise;
    };

    var saveAnimal = function(animal) {
      console.log('saving animal to DB');
      var promise = $http.post('/data', animal).then(function() {
        console.log('added animal');
        return getAnimals();
      });
      return promise;
    };

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
      },
      addAnimal: function(animal) {
        return saveAnimal(animal);
      }
    };

    return publicApi;

}]);
