app.controller('MyController', ['$scope', function($scope) {
    $scope.openAlert = function() {
        alert('hello');
    };

    $scope.myVar = 100;

    $scope.showValue = function() {
        alert($scope.myVar)
    }

}]);