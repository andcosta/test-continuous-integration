 # Projeto template React Native 

Esta é a configuração que utilizo para iniciar meus projetos em [React Native] (https://facebook.github.io/react-native/). Aqui estão descritos os padrões e bibliotecas para criar um aplicativo robusto que funciona corretamente em ambas as plataformas: Android e iOS.


## Iniciando o projeto

Se você ainda não tem o React Native instalado, use [esse tutorial](https://facebook.github.io/react-native/docs/getting-started.html). 

Use o comando ```git clone``` para baixar o projeto template. Em seguida, vá para a pasta raiz do projeto e instale todos os módulos, comando ```npm install```.

### Executar no Android

1. Você precisa conectar o dispositivo de hardware usando o [ADB](https://developer.android.com/studio/command-line/adb.html) ou executar o [emulator](https://developer.android.com/studio/run/emulator-commandline.html)..
2. Execute o comando ```react-native run-android```.

### Executar no iOS

1. O [Xcode](https://developer.apple.com/xcode/) precisa está instalado na sua máquina.
2. Execute o comando ```react-native run-ios```.

## Pacotes Utilizados no Projeto Template

1. Navigator: https://reactnavigation.org/

2. Fabric: https://www.npmjs.com/package/react-native-fabric

## Diretrizes e algumas recomendações

1. Code style: https://github.com/airbnb/javascript

## Anti pradrões
      - Remover chamadas ```console.log()```
      - Não execute nenhuma lógica na função ```render()```
      - Não use ```ListView```, use ```FlatList```
      - Não execute nenhuma lógica em ```componentWillMount()```

## Estrutura do projeto
   - android
   - ios
   - node_modules
   - index.android.js
   - index.ios.js
   - ...
   - app
    - components
    - screens
    - resources