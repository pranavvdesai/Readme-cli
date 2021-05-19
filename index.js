var inquirer = require('inquirer');
const fs = require('fs');
const {markdownModule} = require('./markdownModule');
console.log(markdownModule)
inquirer
  .prompt([
    {   
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {   
        type: "input",
        name: "description",
        message: "Write a short description about the project"
    },
    {   
        type: "input",
        name: "overview",
        message: "What is the overview of your project?"
    },
    {   
        type: "input",
        name: "usage",
        message: "What are the requirements"
    },
    {   
        type: "input",
        name: "authors",
        message: "Who are the authors of the project"
    },
    {   
        type: "input",
        name: "contributors",
        message: "Who are the contributors of the project"
    },
   
   
   
    
  ])
  .then(answers => {

    var readme = markdownModule(answers)
    generate(readme)

    console.log(answers)

})



generate = (data)=>{
fs.writeFile("./readme.md",data,(err)=>{
    if(err){
        console.log('error',err);
    }
    console.log("created!")    

})
}