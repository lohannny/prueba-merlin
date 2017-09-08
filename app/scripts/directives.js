var cont = 0;
var cantidad = 0;
var array = [];
var zoomValue = 1;
angular.module('EjemploAngularjs')
    .directive('resize', function ($window) {
        return function (scope, element) {
            var w = angular.element($window);
            scope.getWindowDimensions = function () {
                return {
                    'h': w.height(),
                    'w': w.width()
                };
            };
            scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
                scope.windowHeight = newValue.h;
                scope.windowWidth = newValue.w;

                scope.style = function () {
                    return {
                        'height': newValue.h + 'px',
                        'width': newValue.w + 'px'
                    };
                };


                if (scope.windowWidth < 1000) {
                    scope.valor = 'funciona'
                }
                else{
                    scope.valor = ''
                }

            }, true);


            w.bind('resize', function () {
                scope.$apply();
            });
        }
    });

