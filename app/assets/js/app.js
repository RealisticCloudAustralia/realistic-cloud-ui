	// create the module and name it app
	var app = angular.module('app', ['ngRoute']);

	// configure our routes
	app.config(function($routeProvider, $locationProvider) {
        
        $locationProvider.hashPrefix('');
        
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'components/home/home.view.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'components/about/about.view.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'components/contact/contact.view.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
        $scope.depname = 'Home';
	});

	app.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
        $scope.depname = 'About';
	});

	app.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
        $scope.depname = 'Contact';
	});