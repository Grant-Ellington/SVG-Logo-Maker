const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'What is your text'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape do you want ',
    choices: ['triangle', 'circle', 'square']
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What is your text color'
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What is your shape color'
  },


]
class CLI {
  run() {
   inquirer.prompt(questions).then(({text, shape, textColor, shapeColor })=>{
    let newObj;  
    switch(shape){
        case 'circle':
           newObj = new Circle(text, textColor, shapeColor);
          break;
          
        case 'square':
           newObj = new Square(text, textColor, shapeColor);
          break;
        case 'triangle':
           newObj = new Triangle(text, textColor, shapeColor);
          break;

      }
      let renderText = newObj.render();

      return writeFile('logo.svg', renderText)
   })
   

  }
}

module.exports = CLI;