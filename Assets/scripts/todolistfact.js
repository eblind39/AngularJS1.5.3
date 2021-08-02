let ToDoListApp = angular.module("ToDoListApp", ["ngMaterial"]);

ToDoListApp.factory('ToDoService', function() {
    var toDoService = {};

    toDoService.key = 'angular-todolist';

    if (localStorage.getItem(toDoService.key)) {
        toDoService.items = JSON.parse(localStorage.getItem(toDoService.key));
    } else {
        toDoService.items = [];
    }

    toDoService.addItem = function(item) {
        toDoService.items.push(item);
        toDoService.updateLocalStorage();
    }

    toDoService.clear = function() {
        toDoService.items = [];
        toDoService.updateLocalStorage();
    }

    toDoService.getAll = function() {
        return toDoService.items;
    }

    toDoService.removeItem = function(itemRem) {
        toDoService.items = toDoService.items.filter(item => item !== itemRem);
    }

    toDoService.updateLocalStorage = function() {
        localStorage.setItem(toDoService.key, JSON.stringify(toDoService.items));
    }

    return toDoService;
});

ToDoListApp.controller('ToDoListController', ['$scope', 'ToDoService', function(s, ts) {
    let n = 1;
    s.newTodo = { id: null, activity: '', duedate: null };

    s.todos = ts.getAll();
    n = s.todos.length;

    s.addTodo = function() {
        s.newTodo.id = n++;
        ts.addItem(s.newTodo);
        s.newTodo = { id: null, activity: '', duedate: null };;
    }

    s.removeTodo = function(todo) {
        s.todos = ts.removeItem(todo);
    }

    s.clear = function() {
        s.todos = ts.clear();
    }
}]);