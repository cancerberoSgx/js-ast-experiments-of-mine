function isFunctionName(variable) {
    return variable && variable.defs[0].type === "FunctionName";
}
const result = util(1, function () {
    return this.foo + 1
})
const result2 = util(1, function () {
    return [1, 2].map(function (n) {
        this.foo + 1
    })
})
