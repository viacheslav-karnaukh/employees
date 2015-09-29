/*global define */
define(function (require) {
	'use strict';
    var Employee = require('js/components/Employee');
    function HourlySalaryEmployee(parameters) {
        this.salary = parameters.salary;
        this.name = parameters.name;
        this.id = parameters.id;
    }
    HourlySalaryEmployee.prototype = Object.create(Employee.prototype, {
        getSalary: {
            value: function() {
                return this.salary * 20.8 * 8;
            }
        },
        constructor: {
            value: HourlySalaryEmployee
        }
    });
    return HourlySalaryEmployee;
});