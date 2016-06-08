
angular.module("PokeDate", [])
  .controller("pokeDateController", pokeDateController);
  pokeDateController.$inject = ['$http'];

  function pokeDateController ($http) {
    var dateCtrl = this;
    dateCtrl.name = "PokeDate";

     dateCtrl.generateThree=function(){
        var arr = []
        var i = 0;
        while(i<3){
            arr.push(Math.floor(Math.random()*300))
        }
        return arr
    }

    $http.get("http://pokeapi.co/api/v2/pokemon?limit=811")
              .then(function(response){
                  console.log(response)
                  dateCtrl.pokedex = response.data.results
              }, function(error){
                  console.error(error)
              })
             dateCtrl.search =""
             dateCtrl.url = "http://pokeapi.co/api/v2/pokemon/" + search

              dateCtrl.getPokemon = function(url){
                  $http.get(url)
                      .then(function(response){
                          console.log(response)
                          dateCtrl.gottem = response.data
                      }, function(error){
                          console.error(error)
                      })

  }
}
