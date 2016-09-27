var MainController = function MainController() {
  var self = this;
  self.person = {
    name: 'Harish',
    location: 'Hicksville, New York'
  };
};

angular
  .module('app')
  .controller('MainController', MainController);
