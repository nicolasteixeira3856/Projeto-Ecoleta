# Comandos executados na aula:

## NodeJS: 
- npm init -y
- npm install express,
- npm install @types/express -D,
- npm install ts-node -D,
- npx ts-node src/server.ts,
- npm install typescript -D,
- npx tsc --init,
- npm install ts-node-dev -D,
- npx ts-node-dev src/server.ts 
- npm install knex
- npx knex --knexfile knexfile.ts migrate:latest para a criação das migrations
- npx knex --knexfile knexfile.ts seed:run para os seeds do banco de dados
- npm install cors - para a configuração de cors no app
- npm install multer - para upload de imagens
- npm install @types/multer
- npm install celebrate
- npm install @types/hapi__joi

## Atenção para todos os scripts para execução adicionadas no package.json

Adicionando também ao NodeJS o comando de dev, knex:migrate, knex:seed no package.json da seguinte forma: 

```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts",
    "knex:migrate": "knex --knexfile knexfile.ts migrate:latest",
    "knex:seed": "knex --knexfile knexfile.ts seed:run"
  },
```

## React: 
- npx create-react-app web --template=typescript
- npm start
- npm install react-icons
- npm install react-router-dom
- npm install @types/react-router-dom -D
- npm install leaflet react-leaflet
- npm install @types/react-leaflet -D
- npm install axios
- npm install react-dropzone

A library https://leafletjs.com foi utilizada para integração de mapas de forma gratuita  
A API do IBGE https://servicodados.ibge.gov.br/api/docs/localidades?versao=1#api-_ foi utilizada para pegar estados e cidades do Brasil

## React Native - Expo: 
- sudo npm install -g expo-cli
- expo init mobile-expo-react
- cd mobile-expo-react/
- npm start
- expo install @expo-google-fonts/roboto @expo-google-fonts/ubuntu expo-font
- npm install @react-navigation/native
- expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
- npm install @react-navigation/stack
- expo install react-native-maps
- expo install expo-constants
- expo install react-native-svg
- npm install axios
- expo install expo-location
- expo install expo-mail-composer
- npm install react-native-picker-select

Foi utilizado o aplicativo Expo no celular com a leitura do QRCode para fins de teste da aplicação durante o desenvolvimento

O programa Insomnia foi utilizado para teste das rotas da aplicação de back-end feita em NodeJS
