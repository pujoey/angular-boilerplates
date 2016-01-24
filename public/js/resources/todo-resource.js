(function() {
'use strict';

angular.module('app')
  .factory('Todo', Todo);

  Todo.$inject = ['$resource'];

  function Todo($resource) {

    return $resource('/read');

  }

})();
