/*global define */
define(function (require) {
    /**
     * A module representing an employee with fixed salary.
     * @module js/components/FixedSalaryEmployee
     */
	'use strict';
    var Employee = require('js/components/Employee');
    /**
     * @classdesc Employee with fixed salary.
     * @constructor
     * @augments Employee
     */
    function FixedSalaryEmployee(parameters) {
        this.salary = parameters.salary;
        this.name = parameters.name;
        this.id = parameters.id;
    }
    FixedSalaryEmployee.prototype = Object.create(Employee.prototype, {
        /**
         * Get employee's salary
         * @method getSalary
         * @override
         * @return {Number}
         */
        getSalary: {
            value: function() {
                return this.salary;
            }
        },
        constructor: {
            value: FixedSalaryEmployee
        }
    });
    return FixedSalaryEmployee;
});