var app = angular.module("app", []);

app.directive("country", function() {
	return {
		restrict: "E",
		controller: function() {
			this.makeAnnouncement = function(message) {
				console.log("Country says: " + message);
			}
		},
		link: function(scope, el, attrs, ctrl){
			ctrl.makeAnnouncement('info from country');
		}
	}
});

app.directive("state", function() {
	return {
		restrict: "E",
		require: ["state", "^country"],
		controller: function() {
			this.makeLaw = function(val) {
				console.log("State says: " + val);
			}
		},
		link: function(scope, element, attrs, ctrls) {
			var stateCtrl = ctrls[0];
			var countryCtrl = ctrls[1];
			stateCtrl.makeLaw('info from state')
			countryCtrl.makeAnnouncement('info from state')
		}
	}
});

app.directive("city", function() {
	return {
		restrict: "E",
		require: ["^country", "^state"],
		link: function(scope, element, attrs, ctrls) {
			var countryCtrl = ctrls[0];
			var stateCtrl = ctrls[1];
			countryCtrl.makeAnnouncement("info from city");
			stateCtrl.makeLaw("info from city");
		}
	}
});