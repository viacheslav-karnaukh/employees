/*global define */
define(function (require) {
    'use strict';
    var FixedSalaryEmployee = require('js/components/FixedSalaryEmployee');
    var HourlySalaryEmployee = require('js/components/HourlySalaryEmployee');
    var createEmployee = {
        'FixedSalaryEmployee': FixedSalaryEmployee,
        'HourlySalaryEmployee': HourlySalaryEmployee
    };
    return createEmployee;
});