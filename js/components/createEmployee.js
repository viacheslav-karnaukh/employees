/*global define */
define(function (require) {
    /**
     * A module for creating an employee with specified type depending on property.
     * @module js/components/createEmployee
     */
    'use strict';
    var FixedSalaryEmployee = require('js/components/FixedSalaryEmployee');
    var HourlySalaryEmployee = require('js/components/HourlySalaryEmployee');
    /**
     * Namespace createEmployee for choosing relevant constructor.
     * @namespace
     */
    var createEmployee = {
        /**
         * createEmployee['FixedSalaryEmployee'] for FixedSalaryEmployee constructor.
         * @constructor
         */
        'FixedSalaryEmployee': FixedSalaryEmployee,
        /**
         * createEmployee['HourlySalaryEmployee'] for HourlySalaryEmployee constructor.
         * @constructor
         */
        'HourlySalaryEmployee': HourlySalaryEmployee
    };
    return createEmployee;
});