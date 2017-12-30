//server-side application, not to be confused with the app.js file under public directory
// to run ths js file, we need to use server.js file
// no need to use IIFE style on server
// the variables and functions are within the scope of app.js file, and not available to the outside.
// to expose certain functions, modules.exports can be used
// modules can be used to create your own APIs, and connect to third-party APIs and talk to the database
// module.exports = {
//   message: 'hello',
//   sayHello: function () {
//         console.log('say hello')
//     }
// };



// console.log('hello from app.js on the server side');

module.exports = function (app) {
    // console.log('message = ' + message);

    var todos = [
        {title: 'todo 123', details: 'details 123'},
        {title: 'todo 234', details: 'details 234'},
        {title: 'todo 345', details: 'details 345'}
    ];

    // app.get('/getTheTodos', function (req, res) { //app.get is registering and listening to incoming request, if it match the url specified, execute the function
    app.get('/api/todo', findAllTodos);//function (req, res) { // the api is a convention to solve the ambuguity of routing for dynamic content vs the static contents under public directory
        // res.send('here are the todos');             // naming convention getTheTodos --> //todo, which is the entity you want to manupilate
        // res.json(todos);

    app.get('/api/todo/:index', findTodoByIndex); //:index is the path parameter and encoded in request params map, : is the placeholder

    app.delete('/api/todo/:index', deleteTodo);

    function findAllTodos(req, res){
        res.json(todos);
    }

    function findTodoByIndex(req, res) {
        var index = req.params['index'];
        res.json(todos[index]);
    }

    function deleteTodo(req, res) {
        todos.splice(req.params.index, 1);
        res.json(todos);
    }