/// <reference path="../../../../typings/tsd.d.ts" />

module app.views {

    export class Contact {

        contactForm:ng.IFormController;
        formSent:boolean;
        user:Object;

        sendForm() {
            if (this.contactForm.$valid) {
                this.formSent = true;
                this.contactForm.$setPristine();
                this.user = {};
            }
        }
    }

    export class ContactState {
        contactModule:ng.IModule;

        constructor(name) {
            this.contactModule = angular
                .module(name, ['app.inputDctv', 'ui.router'])
                .config(function ($stateProvider) {
                    $stateProvider
                        .state('contact', {
                            url: "/contact",
                            templateUrl: "components/views/contact/contact.html",
                            controller: Contact,
                            controllerAs: "vm"
                        })
                })
        }
    }

    new ContactState('app.view.contact');

}