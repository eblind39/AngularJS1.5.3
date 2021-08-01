let MyNGApp = angular.module("MyNGApp", []);
MyNGApp.controller("MyNGController", ["$scope", "$http", function(s, h) {
    s.posts = [];
    h.get("https://jsonplaceholder.typicode.com/posts")
        .success(function(data) {
            console.log(data);
            s.posts = data;
        })
        .error(function(err) {
            console.log(err);
        });
}]);