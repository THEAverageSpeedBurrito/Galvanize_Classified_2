(function() {
  'use strict';
  const DATABASE_URL = 'https://eb-classified-api.herokuapp.com';

  angular.module('app', [])
  .component('fluff', {
    controller: controller,
    template: `
      <h1>Classified</h1>
      <div ng-repeat="post in $ctrl.postData">
        <img src={{post.item_image}}/>
        <p>{{post.title}}</p>
        <p>$ {{post.price}}</p>
        <p>{{post.description}}</p>
        <hr/>
      </div>
    `
  });

  controller.$inject = ['$http'];
  function controller($http) {
    const vm = this;

    vm.$onInit = function() {
      this.getAll();
    };

    vm.getAll = function () {
      $http.get(`${DATABASE_URL}/classifieds`).then((res) => {
        console.log(res.data);
        vm.postData = res.data;
      });
    };
  }

}());
