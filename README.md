Calculator
=======

This is just small example of calculator using jquery.

Usage
------
To use calculator, go by this link https://dungur.github.io/JS/.

Problems and solutions that happend after work with eslint and eslint-google-config 
------
- Install config-google use this command "npm install --save-dev eslint eslint-config-google" , after that run eslint " eslint js/**"
and got errors "Error: Cannot find module 'eslint-config-google' Referenced from: D:\JS\.eslintrc at ModuleResolver.resolve (\node_modules\eslint\lib\util\module-resolver.js:74:19)"
- Solution: 
In  .eslintrc.json file change "extends": "google", to  "extends": "./node_modules/eslint-config-google/index.js",
then in node_modules\eslint\index.js chnage  extends: 'xo', to extends: '../eslint-config-xo/index.js',
