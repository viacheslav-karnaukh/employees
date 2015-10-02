/*global define, $ */
define(function(require) {
	 'use strict';
	 var create = require('js/components/createEmployee');
	 function EmployeesCollection(employees) {
		 if(arguments.length) {
			 this.employees = this._sort(employees);
		 } else {
			 this.employees = [];
		 }
	 }

	 ////Helper to sort by DESC avg salary and ASC alphabetically in case avg salaries are equal.
	 EmployeesCollection.prototype._sort = function(employees) {
		 return employees.map(function(employee) {
			 return new create[employee.type](employee);
		 }).sort(function(a,b) {
			 var x = a.name.toLowerCase();
			 var y = b.name.toLowerCase();
			 return (b.getSalary() - a.getSalary()) || (x < y ? -1 : x > y ? 1 : 0);
		 });
	 };

	 EmployeesCollection.prototype.getInfo = function() {
		 return this.employees.map(function(employee) {
			 return {
				 id: employee.id,
				 name: employee.name,
				 salary: employee.getSalary()
			 };
		 });
	 };

	 EmployeesCollection.prototype.getTopNames = function(quantity) {
		 return this.employees.slice(0,quantity).map(function(employee) {
			 return employee.name;
		 });
	 };

	 EmployeesCollection.prototype.getLastIds = function(quantity) {
		 return this.employees.slice(-quantity).map(function(employee) {
			 return employee.id;
		 });
	 };

	 EmployeesCollection.prototype.fetchData = function(dataType, source, callFunc) {
		 switch (dataType) {
			 case 'html':
				 this.employees = this._sort(JSON.parse(source));
				 break;
			 case 'json':
				 $.getJSON(source, function(data) {
					 this.employees = this._sort(data);
				 }.bind(this)).done(callFunc);
				 break;
		 }
	 };
	 return EmployeesCollection;
 });