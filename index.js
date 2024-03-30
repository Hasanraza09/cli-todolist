#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in your Todo?",
        },
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more?",
            default: false,
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(chalk.bgYellow.black.bold("Task added successfully!"));
    console.log(chalk.green.bold("My Ramadan Routine:"));
    todos.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
    });
    console.log(todos);
    // Display total task count
    console.log(`Total Tasks: ${todos.length}`);
}
