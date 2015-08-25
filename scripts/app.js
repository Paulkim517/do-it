angular.module('starter',[]
.controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.term = "cellar door"
  $scope.showAlert = function() {
    alert($scope.term);
  }	
});
.controller("PicCtrl", ['$scope', function ($scope) {
  beforeClick = null 


});

