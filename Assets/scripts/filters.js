let NGFiltersApp = angular.module('NGFiltersApp', []);
NGFiltersApp.filter('removeHTML', function() {
    return function(text) {
        return text ? String(text).replace(/<[^>]+>/gm, '') : '';
    }
});
NGFiltersApp.controller("MyNGController", ["$scope", function(s) {
    s.myHTML = '<p>Hola Mundo</p>';
}]);