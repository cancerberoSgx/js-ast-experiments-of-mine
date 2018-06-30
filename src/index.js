// const { output } = require('./examples/recast1')()


const {render} = require('./ui/render')
const context = {examples: require('./examples')}
render(context)

// module.exports = {context}