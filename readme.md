# Comandos executados na aula:

## React: 
- npx create-react-app web --template=typescript
## NodeJS - dentro da pasta Server: npm init -y, 
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
- npm install cors para a configuração de cors no app

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

O programa Insomnia foi utilizado para teste das rotas da aplicação de back-end feita em NodeJS
