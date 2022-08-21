// import { inquirer } from 'inquirer';
// import inquirer from 'inquirer';
const inquirer = require('inquirer')
// import inquirer from 'inquirer';

console.log(inquirer)

inquirer.prompt([
    {
        type: 'input',
        name: 'username',
        message: '請輸入你的名字'
    }
]).then(answers => {
    console.log(answers)
})
