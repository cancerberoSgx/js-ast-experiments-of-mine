[1, 2, 3].forEach(n => {
  if (n === 10) {
    console.log('happy birday');
  }
})
var b = new Array(10).map((val, index) => index), c = Math.random() < 0.5 ? [] : undefined;
(b && (c || [])).map(k => k * 2)