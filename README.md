# vvf

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### vscode settings.json for eslint
```
{
    "files.autoSave": "onFocusChange",
    "eslint.alwaysShowStatus": true,
    "editor.tabSize": 2,
    "editor.insertSpaces": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.enable": true,
    "eslint.validate": [
        "vue", "javascript", "html"
    ],
    "[javascript]": {
        "editor.defaultFormatter": "dbaeumer.vscode-eslint"
    },
    "eslint.format.enable": true,
    "terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\cmd.exe",
    "window.zoomLevel": 0,
    "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
    }
}
```

## vscode extension conflict with eslint
```
- JS-CSS-HTML Formatter
```

### add firebaseConifg.js on root directory
```
export default {
  apiKey: 'xxxxxx~',
  authDomain: 'vvvf-xxx.firebaseapp.com',
  databaseURL: 'https://vvvf-xxx.firebaseio.com',
  projectId: 'vvvf-xxx',
  storageBucket: 'vvvf-xxx.appspot.com',
  messagingSenderId: '1234512345~~~',
  appId: 'xxxxxx',
  measurementId: 'xxxx'
}
```
