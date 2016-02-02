/// <reference path='../../../../typings/tsd.d.ts' />

module app.directives {

    export function InputDctv():ng.IDirective {
        return {
            templateUrl: "components/directives/input/input.html",
            transclude: true,
            scope: {
                model: "="
            },
            require: "^form",
            compile: function (el:ng.IAugmentedJQuery, attrs:IInputAttrs) {
                var tpl = attrs.type === 'multiline'
                    ? angular.element('<textarea>').attr('rows', 4)
                    : angular.element('<input>').attr('type', attrs.type || 'text');

                tpl.attr({
                    'ng-required': attrs.required,
                    'ng-minlength': attrs.minlength || 3,
                    'ng-model': 'model'
                });

                tpl.addClass('form-control');

                var inputContent = el[0].querySelector(".input-content");
                angular.element(inputContent).append(tpl);

                return {
                    post: function (scope:IInputScope, el:ng.IAugmentedJQuery, attrs:IInputAttrs, form:ng.IFormController) {
                        scope.form = form;
                    }
                }
            }
        }
    }

    angular
        .module('app.inputDctv', ['ngMessages'])
        .directive('inputDctv', InputDctv);

}