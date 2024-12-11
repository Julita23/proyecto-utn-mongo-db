# **API DE GESTIÓN DE VINOS MENDOCINOS** 🍷

Esta API permite gestionar un catálogo de vinos mendocinos, brindando funcionalidades para agregar, actualizar, consultar y eliminar vinos en una base de datos MongoDB. Diseñada pensando en la eficiencia y la facilidad de uso, es una herramienta ideal para administrar información detallada sobre vinos de forma rápida y segura.

## Características Principales 🍇

**Agregar Vinos:** Permite registrar nuevos vinos con datos como nombre, marca, variedad, año de cosecha, precio, descripción y stock disponible.
**Consultar Vinos:** Obtén la lista completa de vinos o busca un vino específico por su ID.
**Actualizar Información:** Modifica datos existentes de un vino específico.
**Eliminar Registros:** Elimina vinos de la base de datos según su ID.
**Validaciones:** Los datos son validados antes de ser almacenados para garantizar la calidad y consistencia de la información.

## Endpoints Disponibles 🌐

| **Método** | **Endpoint**   | **Descripción**                               |
|------------|----------------|-----------------------------------------------|
| `GET`      | `/wines`       | Obtiene la lista completa de vinos.          |
| `GET`      | `/wines/:id`   | Obtiene información de un vino por su ID.    |
| `POST`     | `/wines`       | Agrega un nuevo vino a la base de datos.     |
| `PUT`      | `/wines/:id`   | Actualiza la información de un vino existente. |
| `DELETE`   | `/wines/:id`   | Elimina un vino de la base de datos.         |

## Modo de instalacion

1. **Clone the repository:**
```bash
   git clone https://github.com/Julita23/proyecto-utn-mongo-db
```

2. **Dirigirse al directorio:**
```bash
   cd proyecto-utn-mongo-db
```

3. **Instalar dependencias:**
```bash
   npm install
```

## Modo de uso
3. **Levantar el servidor en local:**
```bash
   npm run dev
```

### Registro de Usuarios 🚀

Antes de poder iniciar sesión, es necesario registrarse en el sistema proporcionando un nombre de usuario, contraseña y correo electrónico válidos. El registro asegura que las credenciales del usuario estén protegidas mediante cifrado con `bcryptjs`.

**Endpoint para Registrar un Usuario:**

- **URL**: `/register`
- **Método**: `POST`
- **Body**:
  ```json
  {
      "username": "tu_usuario",
      "password": "tu_contraseña",
      "email": "tu_correo@ejemplo.com"
  }
- **Errores:** Si el nombre de usuario ya está en uso, no se permitirá registrar al usuario.

**Inicio de Sesión** 🔑
Una vez registrado, el usuario puede iniciar sesión proporcionando su nombre de usuario y contraseña. Las credenciales se validan y se compara la contraseña ingresada con la almacenada en la base de datos.

**Endpoint para Iniciar Sesión:**

- **URL**: `/login`
- **Método**: `POST`
- **Body**:
  ```json
  {
      "username": "tu_usuario",
      "password": "tu_contraseña",
  }
- **Errores:** Si el nombre de usuario no existe, no se permitirá el inicio de sesión y Si la contraseña es incorrecta, el acceso será denegado.

**Seguridad** 🔒
Las contraseñas de los usuarios se almacenan de forma segura en la base de datos mediante un algoritmo de hash (bcryptjs). Esto garantiza que incluso si la base de datos es comprometida, las contraseñas no estarán disponibles en texto plano.