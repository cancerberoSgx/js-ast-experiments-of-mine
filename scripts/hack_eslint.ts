import { readFileSync, writeFileSync } from 'fs';

// replace 'require' with 'require2' so it works after monaco-editor is loaded 

const text = readFileSync('static/eslint.js').toString().replace(/require/g, 'require2')
writeFileSync('static/eslint.js', text)