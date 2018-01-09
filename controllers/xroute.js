angular.module('app',['ng-module']);
app.config(function ($routeProvider) {
	$routeProvider
	.when ('/inbox',{
		templateUrl: 'view/inbox.html',
		controller:'InboxCtrl',
		controllers: 'inbox'
	})
	.when('/inbox/email/:id', {
		templateUrl:'views/email.html',
		controller:"EmailController"
		controllers:'email'
	})
	.otherwise({
		redirectTo: '/inbox'
	});
});