/// <reference path='../../../../typings/tsd.d.ts' />

module app.directives {

    export function uploadDctv(Upload, CONFIG):ng.IDirective {
        return {
            replace: true,
            scope: {
                model: "=",
                required: "="
            },
            require: "^form",
            templateUrl: "components/directives/upload/upload.html",
            link: function (scope:IUploadScope, el, attrs, form) {
                scope.form = form;
                scope.$watch('file', (file) => {
                    if (file) {
                        Upload.upload({
                            url: CONFIG.API_PREFIX + 'file.php',
                            file: file
                        }).progress(function (evt) {
                            scope.percent = Number(100 * evt.loaded / evt.total);
                            console.log('progress: ' + scope.percent + '% file :' + evt.config.file.name);
                        }).success(function (data, status, headers, config) {
                            console.log('file ' + config.file + 'is uploaded successfully. Response: ' + data);
                            scope.model = data.file;
                        });
                    }
                });
            }
        }
    }

    angular
        .module('app.uploadDctv', ['ngFileUpload'])
        .directive('uploadDctv', uploadDctv);
}