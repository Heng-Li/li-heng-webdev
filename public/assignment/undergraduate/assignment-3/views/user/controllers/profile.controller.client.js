(function() {
    angular
        .module('WAM') //retriving WAM
        .controller('profileController', profileController);
    
    function profileController ($location, $routeParams, userService) { //$ sign indicating the services are provided by the framework

        var model = this;
        var userId = $routeParams['userId'];

        model.user = userService.findUserById(userId);
        // console.log(user);
    }
})();