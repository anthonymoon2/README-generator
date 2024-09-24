// packages needed 
import inquirer from "inquirer";
import fs from 'fs';

// array of questions for user input
const questions = [
    "Enter the title of your project: ",
    "Enter the description of your project: ",
    "Enter the installation instructions for your project: ",
    "Enter the usage information of your project: ",
    "Enter contributing guidelines of your project: ",
    "Enter the test instructions of your project: ",
    "Enter your Github username: ",
    "Enter your email address: "
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('success'));
}

// function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'projectTitle',
                message: questions[0]
            },
            {
                type: 'input',
                name: 'projectDesc',
                message: questions[1]
            },
            {
                type: 'input',
                name: 'installInstructions',
                message: questions[2]
            },
            {
                type: 'input',
                name: 'usageInformation',
                message: questions[3]
            },
            {
                type: 'input',
                name: 'contributingGuidelines',
                message: questions[4]
            },
            {
                type: 'input',
                name: 'testInstructions',
                message: questions[5]
            },
            {
                type: 'input',
                name: 'github',
                message: questions[6]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[7]
            }
        ])
        .then((response)=> {
            let data = 
`# ${response.projectTitle} \n 
## Description \n 
${response.projectDesc} \n 
## Installation Instruction \n 
${response.installInstructions} 
## Usage Information \n 
${response.usageInformation} \n 
## Contributing Guidlines \n 
${response.contributingGuidelines} \n 
## Test Instructions \n 
${response.testInstructions} \n
## Questions \n 
Github: ${response.github} \n
Email: ${response.email}`;
            
            writeToFile("README.md", data);
        })
}

// initialize app
init();
