let MyNGApp = angular.module("MyNGApp", []);
MyNGApp.controller("MyNGController", ["$scope", function(s) {
    s.nombre = 'Ernesto';

    setTimeout(function() {
        s.$apply(function() {
            s.nombre = 'Alvison';
        });
    }, 2000);

    document.getElementById('myBtn').addEventListener('click', function() {
        s.$apply(function() {
            s.nombre = 'Vladimir';
        });
    });
}]);