const Linter = require("./eslintFacade").Linter;
const linter = new Linter();

const spaceBeforeBlocksRule = require('./semi-custom-445')
linter.defineRule("semi-custom-445", spaceBeforeBlocksRule);
const messages = linter.verifyAndFix("var foo", {
  rules: {
    "semi-custom-445": 2
  }
});


// const spaceBeforeBlocksRule = require('./space-before-blocks')
// linter.defineRule("space-before-blocks34", spaceBeforeBlocksRule);
// const messages = linter.verifyAndFix("function f(){for(;;){if(true){return 1}}}", {
//   rules: {
//       "space-before-blocks": "always"
//   }
// });

console.log(messages);
