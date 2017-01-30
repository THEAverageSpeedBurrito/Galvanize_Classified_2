(function() {
  'use strict';

  angular.module('app', [])
  .component('fluff', {
    controller: controller,
    template: `
      <h1>Classified</h1>
      <form novalidate name="postform">
        <input type="text" name="title" ng-model="$ctrl.post.title" placeholder="Title"/>
        <input type="text" name="price" ng-model="$ctrl.post.price" placeholder="Price"/>
        <input type="text" name="description" ng-model="$ctrl.post.description" placeholder="Description"/>
        <input type="text" name="image url" ng-model="$ctrl.post.item_image" placeholder="image url"/>
        <button type="submit" class="btn btn-primary" ng-click="$ctrl.createPost()">Create Post</button>
      </form>
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

    vm.createPost = function () {
      $http.post(`http://localhost:3000/classifieds`, vm.post)
      .then((res) => {
        console.log(res);
        delete vm.post;
      })
    };

    vm.getAll = function () {
      $http.get(`http://localhost:3000/classifieds`).then((res) => {
        console.log(res.data);
        vm.postData = res.data;
      });
    };
  }

}());
