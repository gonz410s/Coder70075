# Coder70075
Mocker Pets and Users
Gonzalo Silveira 

Hola! 

# Testing

Instalar dependencias

npm install @faker-js/faker bcrypt cookie-parser express jsonwebtoken mongoose multer supertest
npm install --save-dev chai mocha

Ejecutar en una nueva terminal 

node src/app.js

# Utilizando POSTMAN en mi proyecto

Cargar datos simulados en la coleccion.

POST http://localhost:8080/api/mocks/generateData

En la opcion (Body) marcamos RAW y formato JSON:

{
    "users": 10,
    "pets": 20
}

Generar mocked users.

GET http://localhost:8080/api/mocks/mockingusers?num=50

Generar mocked pets.

GET http://localhost:8080/api/mocks/mockingpets?num=100





# Variables de entorno

PORT=8080
MONGO_URI=mongodb+srv://gonz410:lalala@clustergonza.qd3uj.mongodb.net/adoption?retryWrites=true&w=majority

# Screenshots de POSTMAN

https://imgur.com/a/Ch135ex

