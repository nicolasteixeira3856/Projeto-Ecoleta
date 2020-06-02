Comandos executados na aula:

React: 
    npx create-react-app web --template=typescript
NodeJS - dentro da pasta Server: npm init -y, 
    npm install express,
    npm install @types/express -D,
    npm install ts-node -D,
    npx ts-node src/server.ts,
    npm install typescript -D,
    npx tsc --init,
    npm install ts-node-dev -D,
    npx ts-node-dev src/server.ts 
----------------------------------
Adicionando também ao NodeJS o comando de dev no package.json da seguinte forma: 
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "ts-node-dev src/server.ts "
},