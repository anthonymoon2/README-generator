// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from 'fs';

// TODO: Create an array of questions for user input
const questions = [];
questions.push("Enter the title of your project: ");
questions.push("Enter the description of your project: ");
questions.push("Enter the installation instructions for your project: ");
questions.push("Enter the usage information of your project: ");
questions.push("Enter contributing guidelines of your project: ");
questions.push("Enter the test instructions of your project: ");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('success'));
}

// TODO: Create a function to initialize app
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
            }
        ])
        .then((response)=> {
            let data = `# ${response.projectTitle} \n ## Description \n ${response.projectDesc} \n ## Installation Instruction \n ${response.installInstructions} ## Usage Information \n ${response.usageInformation} \n ## Contributing Guidlines \n ${response.contributingGuidelines} \n ## Test Instructions \n ${response.testInstructions}`;
            
            writeToFile("README.md", data);
            console.log("README File created successfully.");
        })
}

// Function call to initialize app
init();
