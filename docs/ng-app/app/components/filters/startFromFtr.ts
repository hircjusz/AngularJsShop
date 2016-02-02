module app.filters {
    export function startFromFtr() {
        return function (expression, currentPage, itemsPerPage) {
            if (expression) {
                return expression.slice((currentPage - 1) * itemsPerPage);
            }
        }
    }

    angular
        .module('app.startFromFtr', [])
        .filter('startFromFtr', startFromFtr);
}