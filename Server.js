const inquirer = require('inquirer');
const department = require('./JS/department');
const employee = require('./JS/employee');
const role = require('./JS/role');

function mainMenu() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'mainMenu',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add/Update Employee', 'View All Roles', 'Add/Update Role', 'View All Departments', 'Add/Update Department', 'Additional Reports', 'Exit']
        }
    ])
    .then((res) => {
        switch (res.mainMenu) {
            case 'View All Employees':
                console.log('\n');
                viewEmployees();
                break;
            
            case 'Add/Update Employee':
                console.log('\n');
                modifyEmployees();
                break;
            
            case 'View All Roles':
                console.log('\n');
                viewRoles();
                break;

            case 'Add/Update Role':
                console.log('\n');
                modifyRoles();
                break;

            case 'View All Departments':
                console.log('\n');
                viewDepartments();
                break;

            case 'Add/Update Department':
                console.log('\n');
                modifyDepartments();
                break;

            case 'Additional Reports':
                console.log('\n');
                additionalReports();
                break;

            default:
                console.log('\nGoodbye!\n\n');
                process.exit();
                break;
        }
    })
}

