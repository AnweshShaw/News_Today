var app = angular.module('registrationApp', []);

app.controller('registrationController', function($scope) 
{
  $scope.register = function() 
  {
    if ($scope.password === $scope.confirmPassword) 
    {
        alert("Registration Successful");
        return;
    }
    else
    {
      alert("Unsuccessful, Try Again !!!");
    }
  };
});
