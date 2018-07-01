(boo, val) => {
  val = 4;
  function bar(val) {
    return val + 1;
  }
  return boo++ + val;
}
const foo3 = function(boo, val) {
  val = 4;
  function bar(val) {
    return val + 1;
  }
  return boo++ + val;
}
function foo(bar) {
  function boo(bar) {
    bar = 2;
    return bar;
  }
}
let localFoo = 2;
function foo(foo) {
  foo = 4;
  return foo;
}
function foo({x}) {
  x = 4;
  return x;
}
function foo(keys) {
  keys++;
  [].push({
    keys: keys
  });
}
function foo(...args) {
  args = args.slice(0, 1);
}
function foo([{value: Component}, props]) {
  Component = 4;
}
function foo(Component) {
  Component = <div />;
}