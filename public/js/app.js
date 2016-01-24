(function() {
'use strict';

angular.module('app', [
  'ngResource',
  'ngRoute'
   ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .when('/states', {
        templateUrl: 'views/states.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

})();
// 'use strict';

// angular
//   .module('app', [
//     'ngResource',
//     'ngRoute'
//   ])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'home.html',
//         controller: 'MainController',
//         controllerAs: 'vm'
//       })
//       .when('/main', {
//         templateUrl: 'views/main.html',
//         controller: 'MainController',
//         controllerAs: 'vm'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });
