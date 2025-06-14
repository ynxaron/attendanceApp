let dayBoxApp = angular.module("dayBoxApp", []);
dayBoxApp.controller("dayBoxController", function ($scope, $interval) {
  function currentTime() {
    let date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    return h + ":" + m;
  }

  // Keeping track of play time and whether it is frozen or not
  $scope.play_time = currentTime();
  $scope.play_froze = false;
  // Keeping track of pause time and whether it is frozen or not
  $scope.pause_time = currentTime();
  $scope.pause_froze = false;

  // A function that would run again and again for the specified period of time
  $interval(function () {
    const now = currentTime();
    if (!$scope.play_froze) {
      $scope.play_time = now;
    }
    if (!$scope.pause_froze) {
      $scope.pause_time = now;
    }
  }, 1000);

  $scope.freeze_play = function () {
    $scope.play_froze = true;
  };
  $scope.freeze_pause = function () {
    $scope.pause_froze = true;
  };
});
