let ToDoListApp = angular.module("ToDoListApp", ["ngMaterial"]);
ToDoListApp.controller("ToDoListController", ["$scope", function(s) {
    let n = 1;
    s.newTodo = { id: null, activity: '', duedate: null };
    if (localStorage.getItem('angular-todolist')) {
        s.todos = JSON.parse(localStorage.getItem('angular-todolist'));
        console.log(s.todos);
    } else {
        s.todos = [];
        console.log(s.todos);
    }
    /* s.todo will storage objects like the next one:
        {
            id: 1,
            activity: 'Finish the angular course',
            duedate: '01/08/2021'
        }
    */
    s.addTodo = function() {
        s.newTodo.id = n;
        s.todos.push(s.newTodo);
        s.newTodo = {};
        n++;
    }

    s.clearToDoList = function() {
        s.todos = [];
        n = 0;
    }

    s.$watchCollection('todos',
        function(newValue, oldValue) {
            localStorage.setItem('angular-todolist', JSON.stringify(s.todos));
        }
    )
}]);