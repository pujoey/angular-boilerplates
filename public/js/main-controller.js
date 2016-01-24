(function() {
'use strict';

angular.module('app')
  .controller('MainController', MainController);

MainController.$inject = ['Todo', 'State', '$http'];

function MainController(Todo, State, $http) {
  var vm = this;
  vm.selUserId = '1';
  vm.selState = 'AL';
  vm.isLoggedIn = false;

  // Retrieve all states at start of home.html
  vm.states = State.get()
                   .$promise.then(function (all) {
                     vm.states= all.res;
                   });

  // Retrieve by state by selecting the abbreviation from drop down list
  vm.stateChanged = function() {
    vm.states = State.get({abbreviation: vm.selState})
                   .$promise.then(function (data) {
                     vm.states= [data];
                   });
  };

  vm.login = function(form) {
    var params = {
        "user": form.user.$viewValue,
        "password": form.password.$viewValue
      };
    console.log(params);
    $http({
        url: '/login',
        method: 'POST',
        data: params}).success(function(data) {
        console.log("data", data);
        if (data.result) {
            vm.isLoggedIn = true;
        } else {
            vm.loginerror = "Incorrect username or password!";
        }
    }).error(function(data) {
        vm.loginerror = "Error in server!";
    });

  };




  // // Retrieve all users
  // vm.users = User.query(function() {
  //   var user = new User({name: 'Jim Clark', email: 'jim@email.com'});
  //   user.$save(function(u) {
  //     vm.users.push(u);
  //   });
  // });

  // // Edit the clicked todo
  // vm.selectTodo = function(todo) {
  //   vm.todoEditing = todo;
  // };

  // vm.doneEditing = function(todo) {
  //   todo.$update(function(){
  //     vm.todoEditing = null;
  //   });
  // };

  // // Add todo click handler
  // vm.addTodo = function() {
  //   var todo = new Todo({userId: parseInt(vm.selUserId), title: vm.newTodo, completed: false});
  //   todo.$save(function() {
  //     vm.todos.push(todo);
  //     vm.newTodo = '';
  //   });
  // };

  // // Delete todo click handler
  // vm.deleteTodo = function(todo) {
  //   vm.todos = vm.todos.filter(function(t) { return (t.id != todo.id); });
  //   todo.$delete();
  // };

  // vm.userChanged = function() {
  //   vm.todos = Todo.forUser({userId: vm.selUserId});
  // };
  // // must invoke to initialize because userChange will only trigger when the user changes the select
  // vm.userChanged();

}


})();
