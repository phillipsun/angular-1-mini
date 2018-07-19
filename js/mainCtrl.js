angular.module('friendsList').controller('mainCtrl', function($scope){
  $scope.friends = [ 'Garry', 'Jerry', 'Erika', 'Danny', 'Jordan' ];
  $scope.text = '';
  $scope.addFriend = function() {
    if($scope.text) {
      $scope.friends.push(this.text);
      $scope.text = ''
    }
  }
});