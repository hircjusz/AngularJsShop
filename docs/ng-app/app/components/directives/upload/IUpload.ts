/// <reference path='../../../../typings/tsd.d.ts' />

module app.directives {
    export interface IUploadScope extends ng.IScope {
        form: ng.IFormController;
        percent: number;
        model: string;
    }
}