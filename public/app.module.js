(function() {
  'use strict';

  angular.module('app', [])
  .component('fluff', {
    controller: controller,
    template: 'this'
  });

  function controller() {
    const vm = this;

    vm.$onInit = function() {
    }
  }

}());
