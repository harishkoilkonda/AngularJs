(function(){

'use strict';

var MainController = function MainController() {
  var self = this;
  self.name = 'Harish';
};

angular
  .module('app')
  .controller('MainController', MainController);

})();