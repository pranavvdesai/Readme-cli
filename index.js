var inquirer = require('inquirer');
const fs = require('fs');
const {markdownModule} = require('./markdownModule');
console.log(markdownModule)
inquirer
  .prompt([
    {   
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: (answer) =>{
            if(answer === ''){return 'enter a suitable title'}
            return true
        }
    },
    {   
        type: "input",
        name: "description",
        message: "Write a short description about the project",
        validate: (answer) =>{
            if(answer === ''){return 'enter a suitable description'}
            return true
        }
    },
    {   
        type: "input",
        name: "overview",
        message: "What is the overview of your project?",
        validate: (answer) =>{
            if(answer === ''){return 'enter a suitable overview'}
            return true
        }
    },
    {
        type: "confirm",
        name: "screenshots",
        message : "would you like to add screenshots",
        default : false,
    },
    {
        type: 'input',
		name: 'imageURL',
		message: 'Enter the image paths or urls of screenshots or demo.',
		when: function(answers) {
			return answers.screenshots !== false;
		},
		validate: function(imageURL) {
			if (imageURL) {
				return true;
			}

			return 'Provide the image paths or urls of screenshots or demo. ';

        }
    },
    {   
        type: "input",
        name: "usage",
        message: "What are the requirements",
        validate: (answer) =>{
            if(answer === ''){return 'enter valid requirements'}
            return true
        }
    },
    {   
        type: "input",
        name: "authors",
        message: "Who are the authors of the project",
        validate: (answer) =>{
            if(answer === ''){return 'enter a valid name'}
            return true
        }
    },
    {   
        type: "input",
        name: "contributors",
        message: "Who are the contributors of the project",
        validate: (answer) =>{
            if(answer === ''){return 'enter a valid name'}
            return true
        }
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