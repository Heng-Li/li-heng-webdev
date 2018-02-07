(function() {
    angular
        .module('WAM') //retriving WAM
        .controller('loginController', loginController);
    
    function loginController ($location, userService) {

        var model = this;



        model.login = function (username, password){
           // console.log([username, password]);
            var found = userService.findUserByCredentials(username, password);

            if(found !== null) {
                $location.url('/profile/' + found._id);
                // $scope.message = "Welcome " + username;
            } else {
                model.message = "Username " + username + " not found, please try again";
            }

        };
    }
})();