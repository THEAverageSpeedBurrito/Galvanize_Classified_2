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
      <form novalidate name="editform">
        <input type="text" name="postId" ng-model="$ctrl.update.id" placeholder="post id"/>
        <input type="text" name="title" ng-model="$ctrl.update.title" placeholder="Title"/>
        <input type="text" name="price" ng-model="$ctrl.update.price" placeholder="Price"/>
        <input type="text" name="description" ng-model="$ctrl.update.description" placeholder="Description"/>
        <input type="text" name="image url" ng-model="$ctrl.update.item_image" placeholder="image url"/>
        <button type="submit" class="btn btn-primary" ng-click="$ctrl.updatePost()">Update Post</button>
      </form>
      <div ng-repeat="post in $ctrl.postData">
        <p>id: {{post.id}}</p>
        <img src={{post.item_image}}/>
        <p>{{post.title}}</p>
        <p>$ {{post.price}}</p>
        <p>Description: {{post.description}}</p>
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
        vm.postData.push(res.data)
        delete vm.post;
      })
    };

    vm.updatePost = function () {
      var id = vm.update.id;
      delete vm.update.id;
      $http.patch(`http://localhost:3000/classifieds/${id}`, vm.update)
      .then((res) => {
        console.log(res);
      })
    }

    vm.getAll = function () {
      $http.get(`http://localhost:3000/classifieds`).then((res) => {
        console.log(res.data);
        vm.postData = res.data;
      });
    };
  }

}());
