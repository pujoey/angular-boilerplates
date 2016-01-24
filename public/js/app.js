// (function() {
// 'use strict';

// angular.module('app', [
//   'ngResource',
//   'ngRoute'
//    ])
// })();
// // 'use strict';

angular
  .module('app', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
