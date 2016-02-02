angular
    .module('app.itemsRequest', ['ngResource'])
    .service('itemsRequest', function ($resource) {
        return $resource('http://js.edu.pl/api/examples/items/:id', {id: "@id"}, {
            fetch: {
                method: 'GET'
            },
            update: {
                method: 'PUT'
            },
            add: {
                method: 'POST'
            },
            delete: {
                method: 'DELETE'
            }
        });
    });
