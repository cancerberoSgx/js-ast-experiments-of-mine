
var ReactDOM = require('react-dom');
window.React = require('react')

let container
module.exports.render = function (context) {
  if (!container) {
    container = document.createElement('div')
    container.setAttribute('id', 'main')
    document.body.appendChild(container)
  }

  ReactDOM.render(require('./templates/layout.jsx')(context), container)
}