const {
    prompt
} = require("inquirer");
const logo = require("asciiart-logo");
const db = require("./db");
const {
    inherits
} = require("util");
require("console.table");

init();

function init() {
    const logoText = logo({
        name: "Employee Manager"
    }).render();

    console.log(logoText);

    loadMainPrompts();
}

async function loadMainPrompts() {
    const { choice } = await prompt([{
        type: "list",
        message: "What would you like to do?",
        name: "choice",
        choices: [{
                name: "View All Employees",
                value: "VIEW_EMPLOYEES"
            },
            {
                name: "View All Employees By Department",
                value: "VIEW_EMPLOYEES_BY_DEPARTMENT"
            },
            {
                name: "View All Employees By Manager",
                value: "VIEW_EMPLOYEES_BY_MANAGER"
            },
            {
                name: "Add Employee",
                value: "ADD_EMPLOYEE"
            },
            {
                name: "Remove Employee",
                value: "REMOVE_EMPLOYEE"
            },
            {
                name: "Update Employee Role",
                value: "UPDATE_EMPLOYEE_ROLE"
            },
            {
                name: "Update Employee Manager",
                value: "UPDATE_EMPLOYEE_MANAGER"
            },
            {
                name: "View All Roles",
                value: "VIEW_ROLES"
            },
            {
                name: "Add New Role",
                value: "ADD_ROLE"
            },
            {
                name: "Remove Existing Role",
                value: "REMOVE_ROLES"
            },
            {
                name: "View All Departments",
                value: "VIEW_DEPARTMENT"
            },
            {
                name: "Add New Department",
                value: "ADD_DEPARTMENT"
            },
            {
                name: "Delete Existing Department",
                value: "REMOVE_DEPARTMENT"
            },
        ]
    }])
}

