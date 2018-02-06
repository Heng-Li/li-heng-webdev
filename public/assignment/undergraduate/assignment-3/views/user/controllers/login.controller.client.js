(function() {
    angular
        .module('WAM') //retriving WAM
        .controller('loginController', loginController);
    
    function loginController ($location) {

        var model = this;


        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ];

        model.login = function (username, password){
           // console.log([username, password]);
            var found = false;
            for(var u in users) {
                var user = users[u];
                if(user.username === username && user.password === password) {
                    found = true;
                }

                if(found) {
                    $location.url('/profile');
                    // $scope.message = "Welcome " + username;
                } else {
                    model.message = "Username " + username + " not found, please try again";
                }
            }
        };
    }
})();