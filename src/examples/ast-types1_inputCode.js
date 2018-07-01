const foo = 1
function f(){foo++; f()}
let i = [].map(function(a){return a++})

function hoho(a, b, c, d, f, g) {
  return a +// a comment in the middle
    b;
}