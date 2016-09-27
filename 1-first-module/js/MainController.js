// this is called a getter

var MainController = function MainController($scope, $rootScope) {
    $scope.firstName = 'Amit';
    $scope.lastName = 'Agwan'; // properties

    var self = this;
    this.name = 'Harish';

    self.firstName = 'Avinash';
    self.lastName = 'reddy';
};

MainController.$inject = ['$scope', '$rootScope'];
// getter here to assign controller here
angular
    .module('myApp')
    .controller('MainController', MainController);






// var MainController = function MainController($scope, $rootScope) {
//   var self = this;
//   // || we can use this directly
//
//   $scope.name = 'Amit';
//
//   self.name = 'Amit';
//
//   self.likes = ['Pizza', 'Coke'];
// };
//
// MainController.$inject = ['$scope', '$rootScope'];
//
// angular
//   .module('app')
//   .controller('MainController', MainController);
