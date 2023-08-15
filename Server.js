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
function modifyDepartments() {

    inquirer.prompt([
        {
            type: 'list',
            name: 'modifyDepartments',
            message: 'What would you like to do?',
            choices: ['Add Department', 'Edit Department', 'Delete Department', 'Go Back']
        }
    ])
    .then((res) => {
        switch (res.modifyDepartments) {
            case 'Add Department':
                console.log('\n');
                addDepartment();
                break;
            
            case 'Edit Department':
                console.log('\n');
                editDepartment();
                break;
            
            case 'Delete Department':
                console.log('\n');
                deleteDepartment();
                break;

            default:
                console.log('\n');
                mainMenu();
        }
    })
}

async function viewDepartments() {
    const department = new Department();
    const viewDepartments = await department.viewAll();

    mainMenu();
}

async function addDepartment() {
    const department = new Department();
    const newDepartment = await department.insertNew();

    console.log(`\nSuccessfully added ${newDepartment.name} department!\n`);

    modifyDepartments();
}

async function editDepartment() {
    const department = new Department();
    
    const viewDepartments = await department.viewAll();

    if(viewDepartments !== 0) {
        const editDepartment = await department.updateExisting();

        console.log(`\nSuccessfully updated ${editDepartment.departmentName} department!\n`)
    } else {
        console.log('Please define at least one department\n')
    }

    modifyDepartments();
}

async function deleteDepartment() {
    const department = new Department();
    
    const viewDepartments = await department.viewReadyToDelete();
    
    if(viewDepartments !== 0) {
        const deleteDepartment = await department.deleteExisting();

    } else {
        console.log('Please define at least one department\n')
    }

    modifyDepartments();
}


