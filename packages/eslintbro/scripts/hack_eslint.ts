import { readFileSync, writeFileSync } from 'fs';

// replace 'require' with 'require2' so it works after monaco-editor is loaded 

const text = readFileSync('static/eslint.js').toString().replace(/require/g, 'require2_j8')
writeFileSync('bundle/eslint.js', text)