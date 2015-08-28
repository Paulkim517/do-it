angular.module('starter',[])
.controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.term = "cellar door"
  $scope.showAlert = function() {
    alert($scope.term);
  }	
}])

.controller("PicCtrl", ['$scope', function ($scope) {
  
  $scope.photo = "../shia/images/shia.jpg"
  $scope.ask = function(){
  	$scope.photo = "http://media.giphy.com/media/87xihBthJ1DkA/giphy.gif"
  }

}]);



// http://media.giphy.com/media/87xihBthJ1DkA/giphy.gif