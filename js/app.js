/*global define */
/*global requirejs */
/*global $ */
requirejs.config({
    baseUrl: './',
    paths: {
        jquery: 'js/lib/jquery',
        hljs: 'js/lib/highlight'
    }
});
define(function (require) {
    'use strict';
    var $ = require('jquery');
    var View = require('js/components/EmployeesView');
    var nodesForView;
    nodesForView = {
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
});