var app = angular.module("myApp", []);

app.controller("loginCtrl", function($scope) 
{
	$scope.login = function() 
    {
		if($scope.username=='Anwesh'&&$scope.password=='Anwesh@16')
        {
            $scope.message="Login Successful";
            window.open("http://127.0.0.1:5500/my_account.html","_blank");
        }
        else
        {
            $scope.message="Incorrect Username or Password. Try Again."
        }
	};
});
