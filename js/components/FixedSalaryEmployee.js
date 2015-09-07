define(['components/Employee'], function (Employee) {
	'use strict';
    function FixedSalaryEmployee(parameters) {
        this.salary = parameters.salary;
        this.name = parameters.name;
        this.id = parameters.id;
    }
    FixedSalaryEmployee.prototype = Object.create(Employee.prototype, {
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