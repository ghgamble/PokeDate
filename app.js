(function () {
angular.module("PokeDate", [])
  .controller("pokeDateController", pokeDateController);
  pokeDateController.$inject = ['$http'];

  function pokeDateController ($http) {
    var dateCtrl = this;
    dateCtrl.name = "PokeDate";
  }
  
  
})();