var path = require('path');
var fs = require('fs'); // must preserve this

[1, 2, 3].forEach(n => {
  if (n === 10) {
    console.log('happy birday');
  }
})

var b = [], c = Math.random() < 0.5 ? [] : undefined
fs.readFilePath('foo'); // must preserve this
(b && (c || [])).map(k => k * 2)