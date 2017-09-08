'use strict';
angular.module('EjemploAngularjs')
  .controller('HomeController',['HomeFactory', '$scope', '$rootScope','$stateParams','$localStorage', function(HomeFactory,$scope,$localStorage, $stateParams,$rootScope){


    if ($localStorage.details != undefined ){
      $scope.prueba= $localStorage.details;
      delete $localStorage.details;
    }

  var vm = this;

  vm.users = [];

    HomeFactory.getUsers().then(function(data){
    console.log(data.data);
    vm.users = data.data;
  })

  vm.childrens = [];
  HomeFactory.getChildrens().then(function(data){
    console.log(data.data.data);
    vm.childrens = data.data.data;
  })

    vm.details = [];
    var detailApp={};


    $scope.getDetailApp = function(app){
      detailApp = app;
      vm.details = detailApp;
      $localStorage.details = vm.details;
  }




  }]);
