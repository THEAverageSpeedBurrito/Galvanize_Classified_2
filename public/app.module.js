(function() {
  'use strict';
  const DATABASE_URL = 'https://eb-classified-api.herokuapp.com';

  angular.module('app', [])
  .component('fluff', {
    controller: controller,
    templateURL: 'template.html'
  });

  controller.$inject = ['$http'];
  function controller($http) {
    const vm = this;

    vm.$onInit = function() {
      this.getAll()
    }

    vm.getAll = function () {
      $http.get(`${DATABASE_URL}/classifieds`).then((data) => {
        console.log(data);
      });
    };
  }

}());
