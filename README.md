# desafio-gonative2

## Installation

Open the package.json and add the following lines in the script's directive:

```
"start": "react-native start",
"android": "react-native run-android",
"ios": "react-native run-ios",
"test": "node node_modules/jest/bin/jest.js --watch",
"lint": "eslint app/",
"lint:fix": "eslint app/ --fix",
"react-devtool": "react-devtools"
```

After package.json adjustments you just need to execute the following command

#### For Android

```
yarn run android
```

#### For IOS

```
yarn run ios
```

## Execution

If you already have the application installed on your emulator and, did not had installed native libraries on your application, you won't need to reinstall the application, using the commands listed ahead. For this situation, you just need to execute the command

```
yarn start
```

#### Running the packager with the cache cleaned

```
yarn start --reset-cache
```

## Creating the editor config directive

In the project's root create the file ".editorconfig" with the following content

```
root = true

[*]
charset = utf-8
ident_style = space
ident_size = 2
end_of_line = lf
insert_final_newline =  = true
trim_trailing_whitespace =  = true
```
## Installing the [eslint](https://github.com/eslint/eslint)

First of all, install the esling globally in your OS, using the following command

```
yarn add global eslint
```

After eslint's installation run the following command

```
npm info "eslint-config-airbnb@latest" peerDependencies
```

Then, copy the content returned by the command above and paste in the package.json, in the "devDependencies" directive. And install this dependencies using yarn

```
yarn install
```

Now, we need some more devDependencies in the project, use the command ahead to install

```
yarn add babel-eslint eslint-config-airbnb eslint-plugin-react-native --dev
```

Then, create a file named ".eslintrc" in the root's project, and paste the content ahead

```
{
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "jest": true
  },
  "plugins": [
    "react-native",
    "jsx-a11y",
    "import"
  ],
  "extends": [
    "airbnb",
    "plugin:react-native/all"
  ],
  "rules": {
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "global-require": "off",
    "no-console": "off",
    "import/prefer-default-export": "off",
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ]
  },
  "globals": {
    "__DEV__": true
  }
}
```
At the end of this proccess, we need to install the eslint plugin in ours Editor, then close the editor and re-open to see the eslint working


## Installing the [Babel Module Resolver](https://github.com/tleunen/babel-plugin-module-resolver)

To install the plugin, run the following command

```
yarn add babel-plugin-module-resolver eslint-import-resolver-babel-module --dev
```

After the installation, open the ".babelrc" file in the root's project and paste the following content

```
{
  "presets": ["react-native"],
  "plugins": [
    [
      "module-resolver",
      {
        "cwd": "babelrc",
        "root": ["./src"],
        "extensions": [".js", ".ios.js", ".android.js"]
      }
    ]
  ]
}
```

And in the ".eslintrc" file add the following content before "globals"

```
...
"settings": {
  "import/resolver": {
    "babel-module": {}
  }
},
..."globals"
```
