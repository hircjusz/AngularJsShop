// required: event broadcast
var app = angular.module('modelDemo', []);

app.controller("AuthorListCtrl", function($scope, authorListModel) {

	$scope.quotesList = authorListModel.quotesList;

	$scope.selectQuote = function(author) {
		authorListModel.setSelectedAuthor(author);
	};

	$scope.isSelected = function(author) {
		return author === authorListModel.selectedAuthor;
	};

	$scope.$on('authorModel::open', function(evt, param) {
		$scope.selectedAuthor = param;
	});
});

app.service("authorListModel", function($rootScope) {
	this.quotesList = [
		{
			name: "Fowler",
			quote: "1 Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
		},
		{
			name: "Twain",
			quote: "2 Why, I have known clergymen, good men, kind-hearted, liberal, sincere, and all that, who did not know the meaning of a 'flush.' It is enough to make one ashamed of one's species."
		},
		{
			name: "Poe",
			quote: "3 Deep into that darkness peering, long I stood there, wondering, fearing, doubting, dreaming dreams no mortal ever dared to dream before."
		},
		{
			name: "Plato",
			quote: "4 All things will be produced in superior quantity and quality, and with greater ease, when each man works at a single occupation, in  accordance with his natural gifts, and at the right moment, without meddling with anything else. "
		}
	];

	this.selectedAuthor = null;
	this.setSelectedAuthor = function(author) {
		if (this.quotesList.indexOf(author) > -1) {
			this.selectedAuthor = author;
			$rootScope.$broadcast('authorModel::open', author);
		}
	};

});
