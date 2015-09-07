requirejs.config({
    baseUrl: 'js',
    paths: {
        jquery: 'lib/jquery'
    }
});
define(function (require) {
    'use strict';
    var View = require('components/EmployeesView');
    var nodesForView = {
        textareaButton: $('#getDataArea'),
        inputForWebButton: $('#getDataWeb'),
        getInfoButton: $('#getInfo'),
        getTopNames: $('#getTop5'),
        topNamesInput: $('#topNames'),
        getLastIdsButton: $('#getLast3Ids'),
        lastIdsInput: $('#lastIds'),
        inputForWeb: $('#webSource'),
        textarea: $('textarea'),
        output: $('.output')
    };
    new View(nodesForView).init();
    //hljs.initHighlightingOnLoad();
});