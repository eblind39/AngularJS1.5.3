'use strict';
let MyNGApp = angular.module("MyNGApp", []);
MyNGApp.controller("MyNGController", ["$scope", "$http", function(s, h) {
    s.posts = [];
    s.users = [];
    s.newPost = {};

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
            s.users = data;
            s.posts.map(post => {
                let author = s.users.find(user => user.id == post.userId);
                post.author = { name: '', email: '' };
                post.author.name = author.name;
                post.author.email = author.email;
            });
        })
        .error(function(err) {
            console.log(err);
        });
    }

    s.addPost = function() {
        let post = {
            title: s.newPost.title,
            body: s.newPost.body,
            userId: s.userSelected,
        };
        let author = s.users.find(user => user.id == s.userSelected);
        console.log(author, s.userSelected);
        s.newPost.author = { name: '', email: '' };
        s.newPost.author.name = author.name;
        s.newPost.author.email = author.email;
        
        h.post("https://jsonplaceholder.typicode.com/posts", post)
            .success(function(result, status, headers, config) {
                console.log(result);
                s.posts.push(s.newPost);
                s.newPost = {};
                s.userSelected = null;
            })
            .error(function(err, status, headers, config) {

            });
    }
}]);