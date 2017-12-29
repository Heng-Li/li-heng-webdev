// put all the source code in the function to protect from outside meddleling and meddling with others code.
// to protect polluting global naming space
(function () {  //IIFE immediately-invoked function expression
    angular
        .module("TodoApp", [])  //create or read a module; [] is used to declare dependency on other modules
        .controller("TodoListController", TodoListController); //methods chaining; "TodoListController" is the controller name

    function TodoListController($scope) { //"$scope" enables the controller to be aware of the scope during the controller div
        $scope.todo = {title: "initial title"};
        $scope.todos = [];

        $scope.addTodo = addTodo;
        $scope.removeTodo = removeTodo;

        // event handlers
        function removeTodo(index) {
            $scope.todos.splice(index, 1);
        }

        function addTodo(todo) {
            var newTodo= {
                title: todo.title
            };
            $scope.todos.push(newTodo);
        }
    }

})();  //anonymous function. the last parens say invoke this function