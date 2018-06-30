function handlerExampleSelect(exampleName){
  const example = require('./examples').find(e=>e.name==exampleName)
  const result = example.fn()
  debugger
}

module.exports = {handlerExampleSelect}