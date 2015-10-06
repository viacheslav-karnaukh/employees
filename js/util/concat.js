/**
 * Created by Viacheslav_Karnaukh on 10/6/2015.
 * To use this helper place specified files to this directory and run 'node concat.js'
 */

var concat = require('concat');
var filesToConcat = [
        'Employee.js',
        'FixedSalaryEmployee.js',
        'HourlySalaryEmployee.js',
        'createEmployee.js',
        'EmployeesCollection.js',
        'EmployeesView.js'
];
var out = 'Employees Collection App.js';

concat(filesToConcat, out, function (error) {
    if(error) {
            throw error;
    } else {
            console.log('Sucessfully concatenated ' + filesToConcat + ' to ' + out);
    }
});