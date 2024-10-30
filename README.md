# nestjs-mongodb

Este es un proyecto de aplicación backend construido con NestJS y MongoDB que implementa autenticación JWT y gestión de usuarios. La aplicación permite registrar nuevos usuarios, iniciar sesión y recuperar la lista de usuarios.

## Requisitos

- Node.js (>= 14.0.0)
- MongoDB

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu_usuario/nestjs-mongodb.git
   ```
   ```bash
   cd nestjs-mongodb
   ```
2. Instala las dependencias:
    ```bash
    npm install
    ```
3. Crea un archivo .env en la raíz del proyecto. Para ello, renombra el archivo .env.example y modifica los campos necesarios:
    ```bash
    cp .env.example .env
    ```
Asegúrate de completar los siguientes campos en el archivo .env:
    
    ```bash
    MONGODB_URI=tu_uri_de_mongodb
    JWT_SECRET=tu_secreto_jwt
    PORT=3000
    ```
## Uso
### Registrar un nuevo usuario
Envía una solicitud POST a /auth/register con el siguiente formato en el cuerpo:

```json
{
  "email": "usuario@ejemplo.com",
  "password": "tu_contraseña"
}
```
### Iniciar sesión
Envía una solicitud POST a /auth/login con el siguiente formato en el cuerpo:

```json
{
  "email": "usuario@ejemplo.com",
  "password": "tu_contraseña"
}
```

### Obtener todos los usuarios
Para obtener la lista de usuarios, envía una solicitud GET a /users con el token JWT en el encabezado de autorización.

 ```bash
 Authorization: Bearer tu_token_jwt
 ```
## Licencia
Este proyecto está licenciado bajo la MIT License.