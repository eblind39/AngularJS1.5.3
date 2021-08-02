let MyNGApp = angular.module('MyNGApp', []);
MyNGApp.run(function($rootScope) {
    $rootScope.nombre = 'Vladimir Ernesto';
});
MyNGApp.controller('MyNGController', ['$scope', function(s) {
    s.nombre = 'Alvison';
    setTimeout(() => {
        s.$apply(function() {
            s.nombre = ':3';
        })
    }, 2000);
}]);
MyNGApp.controller('ChildController', ['$scope', function(s) {
    s.nombre = 'Liam';
}]);