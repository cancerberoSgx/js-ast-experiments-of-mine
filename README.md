WIP

some tests using js / ts parsers, generators, transverse helpers, AST mutators, code generators, etc, related tools. Example: 

recast, jscodeshift, ast-types, etc 

that I didn't taste yet



# Development

npm run dev

# build production bundle


`npm run build-production` : uses google-closure-compiler that does 1mb larger file compared to bankai

`npm run build-production2` : uses bankai that does very good job but I don't know how to put my html there yet... TODO - for it to work we have to add the browserify property on package.json which is a bad idea. 


# TODO

 * separate libraries in a diferent bundle so development is fast
 * run https://github.com/cpojer/js-codemod/, https://github.com/jhgg/js-transforms, etc
 * be able to edit programs using ts
 * an option to show a diff between codeinput and output
 * we dont need resize: both not te autolayout of monaco but the later we cannot disable because we dont have an api to est options form util. 