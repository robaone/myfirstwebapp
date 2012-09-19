/**
The Client side application code
**/
var App = {};

var appModule = angular.module('myfirstwebapp',[]);

appModule.config(
		[
		 	'$routeProvider',
		 	function($routeProvider){
		 		$routeProvider.when('', {redirectTo: '/home'});
		 		$routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: App.homeCtrl});
		 		$routeProvider.otherwise({redirectTo: '/home'});
		 	}
		]
);