let ToDoListApp = angular.module("ToDoListApp", ["ngMaterial"]);

ToDoListApp.service('ToDoService', function() {
    this.key = 'angular-todolist';

    if (localStorage.getItem(this.key)) {
        this.items = JSON.parse(localStorage.getItem(this.key));
    } else {
        this.items = [];
    }

    this.addItem = function(item) {
        this.items.push(item);
        this.updateLocalStorage();
    }

    this.clear = function() {
        this.items = [];
        this.updateLocalStorage();
    }

    this.getAll = function() {
        return this.items;
    }

    this.removeItem = function(itemRem) {
        this.items = this.items.filter(item => item !== itemRem);
    }

    this.updateLocalStorage = function() {
        localStorage.setItem(this.key, JSON.stringify(this.items));
    }
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