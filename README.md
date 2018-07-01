WIP

some tests using js / ts parsers, generators, transverse helpers, AST mutators, code generators, etc, related tools. Example: 

recast, jscodeshift, ast-types, etc 

that I didn't taste yet



# Development

npm run dev

# build production bundle


`npm run build-production` : uses google-closure-compiler that does 1mb larger file compared to bankai

`npm run build-production2` : uses bankai that does very good job but I don't know how to put my html there yet... TODO - for it to work we have to add the browserify property on package.json which is a bad idea. 

