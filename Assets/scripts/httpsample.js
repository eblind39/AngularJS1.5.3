'use strict';
let MyNGApp = angular.module("MyNGApp", []);
MyNGApp.controller("MyNGController", ["$scope", "$http", function(s, h) {
    s.posts = [];
    h.get("https://jsonplaceholder.typicode.com/posts")
        .success(function(data) {
            s.posts = data;
            s.bindUsers();
        })
        .error(function(err) {
            console.log(err);
        });
    
    s.bindUsers = function() {
        h.get("https://jsonplaceholder.typicode.com/users")
        .success(function(data) {
            let users = data;
            s.posts.map(post => {
                let author = users.find(user => user.id == post.userId);
                post.author = { name: '', email: '' }
                post.author.name = author.name;
                post.author.email = author.email;
            });
        })
        .error(function(err) {
            console.log(err);
        });
    }
}]);