/// <reference path='../../../../typings/tsd.d.ts' />

module app.directives {
    export interface IInputScope extends ng.IScope {
        form: ng.IFormController;
    }

    export interface IInputAttrs extends ng.IAttributes {
        type: string;
        required: boolean;
        minlength: number;
    }
}
