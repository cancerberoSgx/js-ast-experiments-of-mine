// const {renderTemplate} = require('./templates')

module.exports.render = function(context){
  const container = document.createElement('div')
  container.setAttribute('id', 'main')
  document.body.appendChild(container)

  Object.assign({}, context, {
    exampleList: renderTemplate('exampleList.hbs', context)
  })


  container.innerHtml = require('./templates/layout')(Object.assign({}, context, {
    exampleList: require('./templates/exampleList')(context)
  }))
}