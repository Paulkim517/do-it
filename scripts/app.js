angular.module('starter',[])
.controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
  $scope.term = "cellar door"
  $scope.showAlert = function() {
    alert($scope.term);
  }	
}])

.controller("PicCtrl", ['$scope', function ($scope) {
  
  $scope.photo = "https://nyoobserver.files.wordpress.com/2015/05/screen-shot-2015-05-26-at-6-24-09-pm.png"
  $scope.ask = function(){
  	$scope.photo = "http://media.giphy.com/media/87xihBthJ1DkA/giphy.gif"
  }

}]);


