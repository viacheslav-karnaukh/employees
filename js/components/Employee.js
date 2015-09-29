/*global define */
define('js/components/Employee', function () {
	'use strict';
    function Employee() {}
    Employee.prototype.getSalary = function() {
        throw new Error("You should define this method in the class before use.");
    };
    return Employee;
});