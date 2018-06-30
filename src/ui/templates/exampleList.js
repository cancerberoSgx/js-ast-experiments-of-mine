module.exports = context => `
<ul>
  ${context.examples.map(example=>`<li>${example.name}</li>`)}
</ul>
`


