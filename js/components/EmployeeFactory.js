/*global define */
define(function (require) {
    'use strict';
    var FixedSalaryEmployee = require('js/components/FixedSalaryEmployee');
    var HourlySalaryEmployee = require('js/components/HourlySalaryEmployee');
    function EmployeeFactory() {}
    EmployeeFactory.prototype.createEmployee = function(parameters) {
        var ParentClass = null;
        switch(parameters.type) {
            case 'FixedSalaryEmployee':
                ParentClass = FixedSalaryEmployee;
                break;
            case 'HourlySalaryEmployee':
                ParentClass = HourlySalaryEmployee;
                break;
            default:
                throw new Error('Cannot create employee with "' + parameters.type + '" type in ' + JSON.stringify(parameters));
        }
        if(!ParentClass) {
            return false;
        }
        return new ParentClass(parameters);
    };
    return EmployeeFactory;
});
