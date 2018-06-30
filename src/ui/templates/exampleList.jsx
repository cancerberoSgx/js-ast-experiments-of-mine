module.exports = context => 
<ul onClick={handler}>
  {context.examples.map(example=><li><a href="#" data-example-name={example.name}>{example.name}</a></li>)}
</ul>
function handler(e){
  const {handlerExampleSelect} = require('../../controller')
  console.log(e.target.getAttribute('data-example-name'))
  handlerExampleSelect(e.target.getAttribute('data-example-name'))
}