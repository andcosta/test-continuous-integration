# Projeto template React Native

Esta é a configuração que utilizo para iniciar meus projetos em [React Native](https://facebook.github.io/react-native/). Aqui estão descritos os
padrões e bibliotecas para criar um aplicativo robusto que funciona corretamente em ambas as plataformas: Android e iOS.

## Iniciando o projeto

Se você ainda não tem o React Native instalado, utilize esse [tutorial](https://facebook.github.io/react-native/docs/getting-started.html).

Execute o comando `git clone` para baixar o projeto template. Em seguida, vá para a pasta raiz do projeto e instale todos os módulos, comando
`npm install`.

### Executar no Android

1. Você precisa conectar o dispositivo de hardware usando o [ADB](https://developer.android.com/studio/command-line/adb.html) ou executar o
   [emulator](https://developer.android.com/studio/run/emulator-commandline.html).
2. Execute o comando `react-native run-android`.

### Executar no iOS

1. Para executar o projeto iOS, precisa ter o [Xcode](https://developer.apple.com/xcode/) instalado na sua máquina.
2. Execute o comando `react-native run-ios`.

## Pacotes Utilizados no Projeto Template

1. Navigator: https://reactnavigation.org/
2. Vector icons: https://github.com/oblador/react-native-vector-icons

## Diretrizes e algumas recomendações

1. Code style: https://github.com/airbnb/javascript

## Anti pradrões

1. Remover chamadas `console.log()`
2. Não execute nenhuma lógica na função `render()`
3. Não use `ListView`, use `FlatList`
4. Não execute nenhuma lógica em `componentWillMount()`

## Estrutura do projeto

```
my-app
├── README.md
├── node_modules
├── package.json
│   index.ios.js
├── .gitignore
├── public
│   └ favicon.ico
│   └ index.html
│   └ manifest.json
│
└── src
    ├── assets
    │   └── imagens
    │   └── pdf
    │
    ├── assets
    │   └── imagens
    │
    │
    │
    │
    ├── screens
    │   └── imagens
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
```

## Gerar bundle android

```
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```
