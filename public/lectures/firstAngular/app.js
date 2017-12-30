// client-side application, doesnt have access to file system and database, and have limited access to the network; but has access to keyboard, view, and layout
// put all the source code in the function to protect from outside meddleling and meddling with others code.
// to protect polluting global naming space
(function () {  //IIFE immediately-invoked function expression
    angular
        .module("TodoApp", [])  //create or read a module; [] is used to declare dependency on other modules
        .controller("TodoListController", TodoListController); //methods chaining; "TodoListController" is the controller name

    function TodoListController($scope, $http) { //"$scope" enables the controller to be aware of the scope during the controller div, to interact with DOM
                                                // $http is the services that provides mechanisms to interact with http resources
        $scope.todo = {title: "initial title", details: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum "};
        $scope.addTodo = addTodo;
        $scope.removeTodo = removeTodo;
        $scope.selectTodo = selectTodo;
        $scope.updateTodo = updateTodo;

        function init() {
            findAllTodos();
        }
        init();

        function findAllTodos() {
            $http.get('/api/todo')  //get function returns a promise
                .then(function (response) {
                    $scope.todos = response.data;
                });//call back function
        }

        // event handlers
        function removeTodo(todo) { //index){
            // console.log(todo);
            var index = $scope.todos.indexOf(todo);
            // $scope.todos.splice(index, 1);
            $http.delete('/api/todo/'+index)
                .then(findAllTodos);
        }
        function addTodo(todo) {
            // var newTodo= {
            //     title: todo.title
            // };
            var newTodo = angular.copy(todo);
            newTodo._id = (new Date()).getTime();  //fake unique identifier
            newTodo.date = new Date();
            $scope.todos.push(newTodo);
        }
        function selectTodo(index) {
            $scope.todo = angular.copy($scope.todos[index]);
            $scope.selectedIndex = index;
        }
        function updateTodo(todo) {
            $scope.todos[$scope.selectedIndex] = angular.copy(todo);
        }
    }

})();  //anonymous function. the last parens say invoke this function