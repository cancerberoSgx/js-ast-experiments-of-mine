// parse typescript using recast. 
var recast = require("recast");

var code = `
const a: string = 1
interface I{
    me(s:string):number[]
}
class A implements I{
    private oo:number=99
}
`
// Parse the code using an interface similar to require("esprima").parse.
var ast = recast.parse(code, {
    parser: require("recast/parsers/typescript")
});

console.log(JSON.stringify(ast))

var output = recast.print(ast).code;

console.log(output);
