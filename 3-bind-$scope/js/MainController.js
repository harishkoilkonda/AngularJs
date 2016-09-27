(function(){

	'use strict';

	var MainController = function MainController($scope) {
    var self = this;
    self.name = 'Harish';
    $scope.name = 'Avinash';
};

angular
    .module('app')
    .controller('MainController', MainController);

})();