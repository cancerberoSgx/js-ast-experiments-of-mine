import { State } from '../types';
import React from 'react';
import { handlerExampleSelect } from '../controller';
export default (state: State) => 
<ul onClick={handler}>
  {state.examples.map(example=><li><a href="#" data-example-name={example.name}>{example.name}</a></li>)}
</ul>

function handler(e){
  // const {handlerExampleSelect} = require('../../controller')
  console.log(e.target.getAttribute('data-example-name'))
  handlerExampleSelect(e.target.getAttribute('data-example-name'))
}