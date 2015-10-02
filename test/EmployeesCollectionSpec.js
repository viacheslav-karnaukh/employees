/*global define, describe, beforeEach, expect, it, $ */
define(['js/components/EmployeesCollection', 'js/components/createEmployee'], function(EmployeesCollection, create) {
    'use strict';
    var employeesToTest = [
        {
            "type": "HourlySalaryEmployee",
            "salary": 10,
            "name": "Anna",
            "id": 1
        },
        {
            "type": "HourlySalaryEmployee",
            "salary": 8,
            "name": "Bob",
            "id": 2
        },
        {
            "type": "FixedSalaryEmployee",
            "salary": 8000,
            "name": "Dany",
            "id": 3
        },
        {
            "type": "FixedSalaryEmployee",
            "salary": 8000,
            "name": "Elara",
            "id": 4
        },
        {
            "type": "FixedSalaryEmployee",
            "salary": 8000,
            "name": "elara",
            "id": 5
        },
        {
            "type": "FixedSalaryEmployee",
            "salary": 8000,
            "name": "Clara",
            "id": 6
        },
        {
            "type": "FixedSalaryEmployee",
            "salary": 8000,
            "name": "Alara",
            "id": 7
        },
        {
            "type": "FixedSalaryEmployee",
            "salary": 1000,
            "name": "Egor",
            "id": 8
        }
    ];
    var webSource = 'http://viacheslav-karnaukh.github.io/employees/json/employeesCollection.json';

    describe('EmployeesCollection', function() {
        var collection, emptyCollection, employees;
        beforeEach(function() {
            collection = new EmployeesCollection(employeesToTest);
            emptyCollection = new EmployeesCollection();
            employees = collection.employees;
        });
        it('should apply constructor argument to store employees', function() {
            expect(employees).toBeDefined();
        });
        it('should return empty array as value of employees if there were no arguments when creating instance', function() {
            expect(emptyCollection.employees).toEqual([]);
        });
        it('should count AVG salary for any employee object', function() {
            var fixed = new create["FixedSalaryEmployee"]({
                "type": "FixedSalaryEmployee",
                "salary": 1000,
                "name": "Egor",
                "id": 8
            });
            var hourly = new create["HourlySalaryEmployee"]({
                "type": "HourlySalaryEmployee",
                "salary": 8, // avg = 8 * 8 * 20.8 = 1331.2
                "name": "Bob",
                "id": 2
            });
            expect(fixed.getSalary()).toBe(1000);
            expect(hourly.getSalary()).toBe(1331.2);
        });
        it('should sort all employees in DESC order of AVG monthly salary', function() {
            expect(employees.every(function(e,i,a) {
                if(!i) {
                    return true;
                }
                return e.getSalary() <= a[i-1].getSalary();
            })).toBe(true);
        });
        it('should sort employees by name in case AVG monthly salary is equal', function() {
            var employeesToTest = [
                {
                    "type": "HourlySalaryEmployee",
                    "salary": 10,
                    "name": "Bob",
                    "id": 2
                },
                {
                    "type": "HourlySalaryEmployee",
                    "salary": 10,
                    "name": "Ian",
                    "id": 6
                },
                {
                    "type": "HourlySalaryEmployee",
                    "salary": 10,
                    "name": "Anna",
                    "id": 11
                }
            ];
            expect(collection._sort(employeesToTest).map(function(employee) {
                return employee.name;
            })).toEqual(['Anna','Bob','Ian']);
        });
        it('should get id, name and counted AVG salary', function() {
            expect(collection.getInfo().every(function(employee,i) {
                return employee.salary === collection.employees[i].getSalary();
            })).toBe(true);
        });
        it('should get top 5 first names', function() {
            expect(collection.getTopNames(5).length).toBe(5);
            expect(collection.getTopNames(5)[0]).toBe(collection.employees[0].name);
            expect(collection.getTopNames(5)[4]).toBe(collection.employees[4].name);
        });
        it('should get last 3 ids from the collection', function() {
            var lastId = employees[employees.length - 1].id;
            expect(collection.getLastIds(3).length).toBe(3);
            expect(collection.getLastIds(3)[2]).toBe(lastId);
        });
        it('should get data from web source if "json" is the first argument', function() {
            var len = null;
            emptyCollection.fetchData('json',webSource);
            len = emptyCollection.employees.length;
            setTimeout(function() {
                expect(len > 0).toBe(true);
            },1000);
        });
        it('should get data from HTML source if "html" is the first argument' , function() {
            var len = null;
            var htmlSource = $('<textarea></textarea>').text(JSON.stringify(employeesToTest));
            emptyCollection.fetchData('html', htmlSource.val());
            len = emptyCollection.employees.length;
            expect(len > 0).toBe(true);
        });
        it('should throw error if employee type is not valid', function() {
            var invalidJson = [
                {
                    "type": "WorkerForFood",
                    "salary": 10,
                    "name": "Bob",
                    "id": 2
                },
                {
                    "type": "HourlySalaryEmployee",
                    "salary": 10,
                    "name": "Ian",
                    "id": 6
                },
                {
                    "type": "HourlySalaryEmployee",
                    "salary": 10,
                    "name": "Anna",
                    "id": 11
                }
            ];
            expect(function() {
                var htmlSource = $('<textarea></textarea>').text(JSON.stringify(invalidJson));
                emptyCollection.fetchData('html', htmlSource.val());
            }).toThrowError();
        });
    });
});