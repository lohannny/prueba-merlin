'use strict';

var app = angular.module('EjemploAngularjs', [
	'ui.router',
'ngStorage'



])


app.config(function($stateProvider, $urlRouterProvider){

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'HomeController',
			controllerAs: 'home'
		})

    .state('detailApp', {
      url: '/app/resumen',

          templateUrl: 'views/appDetail.html',
          controller: 'HomeController',
          controllerAs: 'home'



    })






	$urlRouterProvider.otherwise('/home');

});
