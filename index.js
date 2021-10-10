var inquirer = require("inquirer");
const fs = require("fs");
const { markdownModule } = require("./markdownModule");
const chalk = require("chalk");
const figlet = require("figlet");
console.log(
  chalk.green(
    figlet.textSync("Welcome", { horizontalLayout: "full" }) + "readme-cli"
  )
);
inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: (answer) => {
        if (answer === "") {
          return "Please enter a title";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "description",
      message: "Give a short description for the project",
      validate: (answer) => {
        if (answer === "") {
          return "Please enter a description";
        }
        return true;
      },
    },
    {
      type: "editor",
      name: "overview",
      message: "What is the overview of your project?",
      default:
        "/* Click on save and exit the editor. (markdown supported)\n Make sure to erase this comment before you save */",
      validate: (answer) => {
        if (answer === "") {
          return "Please enter an overview";
        }
        return true;
      },
    },
    {
      type: "list",
      name: "License",
      message: "Please choose a License",
      default: "MIT",
      choices: ["MIT", "GNU 2.0", "Apache 2.0", "GNU 3.0", "None"],
    },
    {
      type: "confirm",
      name: "screenshots",
      message: "Would you like to add screenshots",
      default: false,
    },
    {
      type: "input",
      name: "imageURL",
      message: "Enter the image path or url of screenshot",
      when: function (answers) {
        return answers.screenshots !== false;
      },
      validate: function (imageURL) {
        if (imageURL) {
          return true;
        }

        return "Please provide valid url or path";
      },
    },
    {
      type: "input",
      name: "usage",
      message: "What are the requirements of the project? (Use commas to seperate)",
      validate: (answer) => {
        if (answer === "") {
          return "Please enter valid requirements";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "authors",
      message: "Who are the authors of the project?",
      validate: (answer) => {
        if (answer === "") {
          return "Please enter a valid name";
        }
        return true;
      },
    },
    {
      type: "input",
      name: "contributors",
      message: "Who are the contributors of the project?",
      validate: (answer) => {
        if (answer === "") {
          return "Please enter a valid name";
        }
        return true;
      },
    },
  ])
  .then((answers) => {
    const readme = markdownModule(answers);
    generate(readme);
  });

/* generates a new (or) updates the existing readme files */
generate = (data) => {
  fs.writeFile("./readme.md", data, (err) => {
    if (err) {
      console.error("error", err.message);
    }
    console.log("Markdown creation successful!");
  });
};
