const mysql = require("mysql2");
require ("dotenv").config()
require("console.table");
const { prompt } = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    user:"root", 
    password: process.env.MYSQLPASSWORD,
    database: "employees_db"
});

connection.connect(function (err) {
    console.log("database connected")
    if (err) throw err;
  });

function loadPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "View all departments",
                "add a department", 
                "Remove Department",
                "View all roles", 
                "add a role", 
                "Remove Role",
                "View all employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "add an employee", 
                "Remove Employee",
                "update an employee role", 
                "Update Employee Manager",
                "View Total Utilized Budget By Department",
                "Quit"
            ]
        }
    ]).then(res => {
        console.log(res)
        if (res.choice === 'View all departments'){
            console.log('You chose view all departments.')
            connection.promise().query('select * from department;')
            .then(([res]) => {
                console.table(res)
                loadPrompts()
            })
        } else if (res.choice === "add a department"){
            console.log("You chose add a department")
            prompt([
                {
                    type:"input",
                    name:"name",
                    message:"What department you want to add?"
                }
            ]).then(res => {
                connection.promise().query('INSERT INTO department SET ?', res)
            .then (res => {
                console.log('Added department successfully')
                loadPrompts()
            })
            })

        } else if (res.choice === "Remove Department") {
            console.log("You chose remove a department")
        }
        // } else if (res.choice === "Remove Department") {
        //     console.log("You chose remove a department")
        // } else if (res.choice === "Remove Department") {
        //     console.log("You chose remove a department")
        // } else if (res.choice === "Remove Department") {
        //     console.log("You chose remove a department")
        // } else if (res.choice === "Remove Department") {
        //     console.log("You chose remove a department")
        // } else if (res.choice === "Remove Department") {
        //     console.log("You chose remove a department")
        // }
    })
}

loadPrompts()