module.exports = [
  { 
    name: 'recast JavaScript simple 1', 
    fn: require('./examples/recast1'), 
    description: "simple example using recast that switch first two parameters of function declarations with name `add` " 
  }, 

  { 
    name: 'recast TypeScript parsing 1', 
    fn: require('./examples/recast_parsingTs'), 
    description: "Parse TypeScript using recast. prints back the code and prints Ts AST in the console" 
  }
]