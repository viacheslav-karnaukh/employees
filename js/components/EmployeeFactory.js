define(['components/FixedSalaryEmployee', 'components/HourlySalaryEmployee'], function (FixedSalaryEmployee, HourlySalaryEmployee) {
    'use strict';
    function EmployeeFactory() {}
    EmployeeFactory.prototype.createEmployee = function(parameters) {
        var parentClass = null;
        switch(parameters.type) {
            case 'FixedSalaryEmployee':
                parentClass = FixedSalaryEmployee;
                break;
            case 'HourlySalaryEmployee':
                parentClass = HourlySalaryEmployee;
                break;
            default:
                throw new Error('Cannot create employee with "' + parameters.type + '" type in ' + JSON.stringify(parameters));
        }
        if(!parentClass) return false;
        return new parentClass(parameters);
    };
    return EmployeeFactory;
});
