let attendanceApp = angular.module("attendanceApp", []);
attendanceApp.controller(
  "attendanceBar",
  function ($scope, $interval, $timeout) {
    $scope.allDaysInMonth = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28,
    ];
    $scope.weeks = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

    function trimMinutes(m) {
      return (m < 10 ? "0" : "") + m;
    }
    // Formatting the current time in a readable format
    function currentTime() {
      let date = new Date();
      const h = date.getHours();
      const m = date.getMinutes();
      return h + ":" + trimMinutes(m);
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

    // A function that would freeze play whence you click play button
    let LOGGED_IN_MSG = "YOU HAVE LOGGED IN!";
    let LOGGED_OUT_MSG = "YOU HAVE LOGGED OUT!";
    $scope.freeze_play = function () {
      $scope.play_froze = true;
      $scope.isPlayClicked = true;
      showPopupMsg(LOGGED_IN_MSG);
    };
    // A function that would freeze pause whence you click pause button
    $scope.freeze_pause = function () {
      $scope.pause_froze = true;
      $scope.isPauseClicked = false;
      showPopupMsg(LOGGED_OUT_MSG);
    };
    // END: SHOWING TIME AS A FUNCTION TO LOOK BETTER

    // BEGIN: SHOWING LITTLE POP-UP WHEN YOU CLICK THE BUTTON
    // that is it is not showing the pop-up message
    $scope.popUpVisible = false;

    // The function to create a pop-up message whence the user clicks either of these buttons
    function showPopupMsg(msg) {
      $scope.popUpMsg = msg;
      $scope.popUpVisible = true;
      $timeout(function () {
        $scope.popUpVisible = false;
      }, 1000);
    }
    // END: SHOWING LITTLE POP-UP WHEN YOU CLICK THE BUTTON

    // BEGIN: PLAY-BUTTON & PAUSE-BUTTON switch up
    $scope.isPlayClicked = false;
    $scope.isPauseClicked = false;
  },
);
attendanceApp.controller("rightCtrl", function ($scope) {
  function getTime() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();

    function trimMinute(m) {
      return (m < 10 ? "0" : "") + m;
    }

    return h + ":" + trimMinute(m);
  }
  $scope.currentTime = getTime();
});
attendanceApp.controller("leftCtrl", function ($scope) {
  $scope.userName = "Satyam";
});
