var app = angular.module("app", []);

app.controller("ctrl", function ($scope) {

	$scope.log = function (work) {
		alert(work + " is done!");
	}

});

app.directive("kid", function () {
	return {
		restrict: "E",
		scope: {
			done: "&" // access to method
		},
		template: '<div style="border:solid silver; padding: 10px; " class="col-md-4">\n  <input class="form-control" type="text" ng-model="workModel">\n  {{workModel}}\n  <!--jako parametr przekazuję obiekt: klucz z wartością-->\n  <div class="btn btn-primary" ng-click="done({work:workModel})">I\'m done!</div>\n</div>',
		link: function (scope) {

		}
	}
});