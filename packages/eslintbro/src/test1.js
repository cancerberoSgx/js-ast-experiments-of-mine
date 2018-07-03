// var Linter = require("eslint").Linter; // this is from API documentation but wont work in the browser, instead: 
const Linter = require("./eslintFacade").Linter;

const linter = new Linter();
const messages = linter.verifyAndFix("var foo", {
    rules: {
        semi: 2
    }
});

console.log(messages);
 