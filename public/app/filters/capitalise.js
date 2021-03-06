angular.module('app.filters').filter('capitalise', function() {
    "use strict";
    return function(input) {
        if (!angular.isString(input)) {
            return input;
        }
        return input.charAt(0).toUpperCase() + input.slice(1);
    };
});
