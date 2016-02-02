module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/libs/jquery/dist/jquery.js',
            'app/libs/angular/angular.js',
            'app/libs/angular-ui-router/release/angular-ui-router.js',
            'app/libs/angular-sanitize/angular-sanitize.js',
            'app/libs/angular-resource/angular-resource.js',
            'app/libs/angular-bootstrap/ui-bootstrap.js',
            'app/libs/angular-mocks/angular-mocks.js',
            'app/libs/angular-cookies/angular-cookies.min.js',
            'app/libs/angular-messages/angular-messages.js',
            'app/libs/ngmap/build/scripts/ng-map.min.js',
            'app/libs/ng-file-upload/ng-file-upload.js',
            'app/libs/angularjs-aside-menu/src/aside.menu.js',
            'app/libs/underscore/underscore.js',
            'app/components/**/*.js',
            'app/app.js',
            'app/components/directives/input/input.html',
            'app/components/views/items/items.html'
        ],

        preprocessors: {
            'app/**/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: "app/",
            moduleName: "template-module"
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        reporters: ['mocha'],

        mochaReporter: {
            colors: {
                success: 'blue',
                info: 'bgGreen',
                warning: 'cyan',
                error: 'bgRed'
            },
            output: 'autowatch'
        },

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-mocha-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        chromeOnly: true

    });
};
