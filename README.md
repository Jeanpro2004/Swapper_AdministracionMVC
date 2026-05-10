# Swapper 👕

Plataforma web para intercambio de ropa de segunda mano desarrollada con Next.js, TypeScript y Supabase.

Swapper propone una experiencia similar a un marketplace social donde los usuarios pueden intercambiar prendas sin necesidad de dinero. El sistema incluye autenticación, CRUD completo, rutas protegidas y una arquitectura MVC escalable.

---

# 🚀 Tecnologías utilizadas

- Next.js 16
- React
- TypeScript
- Supabase
- PostgreSQL
- CSS
- Git & GitHub

---

# 🎯 Objetivo del proyecto

El objetivo principal del proyecto es construir una aplicación web moderna aplicando:

- Arquitectura MVC
- CRUD completo
- Autenticación real
- Protección de rutas
- Buenas prácticas de frontend
- Integración backend-as-a-service con Supabase
- Organización profesional del código

---

# 📁 Arquitectura del proyecto

El proyecto sigue una estructura MVC adaptada para Next.js App Router.

```bash
app/
components/
controllers/
models/
lib/
types/
supabase/
```

---

# 🧱 Estructura principal

## `app/`

Contiene las rutas y páginas del sistema.

### Carpetas importantes

```bash
(public)/
(protected)/
api/
```

---

## `(public)`

Rutas públicas de la aplicación.

### Ejemplos

```bash
/auth
/
```

---

## `(protected)`

Rutas protegidas que requieren autenticación.

### Ejemplos

```bash
/dashboard
/wardrobe
/feed
/matches
```

---

## `api/`

Endpoints API de la aplicación.

### Ejemplo

```bash
/api/garments
```

---

## `components/`

Componentes reutilizables de interfaz.

### Ejemplos

```bash
AuthForm.tsx
GarmentCard.tsx
GarmentForm.tsx
Header.tsx
Footer.tsx
```

---

## `controllers/`

Lógica de negocio y controladores.

### Ejemplo

```bash
garment.controller.ts
```

---

## `models/`

Conexión y operaciones con base de datos.

### Ejemplo

```bash
garment.model.ts
```

---

## `lib/`

Configuraciones globales y helpers.

### Ejemplos

```bash
supabase/browser.ts
supabase/server.ts
```

---

## `types/`

Tipados TypeScript.

### Ejemplo

```bash
garment.ts
```

---

# 🔐 Autenticación

La autenticación fue implementada utilizando **Supabase Auth**.

## Funcionalidades actuales

- ✅ Registro de usuarios
- ✅ Inicio de sesión
- ✅ Persistencia de sesión
- ✅ Protección de rutas privadas
- ✅ Redirección automática
- ✅ Manejo de sesiones

---

# 🛡️ Protección de rutas

Las rutas privadas están protegidas mediante `proxy.ts`.

## Rutas protegidas

```bash
/dashboard
/wardrobe
/feed
/matches
```

## Comportamiento

Si el usuario no tiene sesión activa:

```bash
→ redirección automática a /auth
```

---

# 🧥 CRUD de prendas

Actualmente el sistema permite:

- ✅ Crear prendas
- ✅ Visualizar prendas
- ✅ Editar prendas
- ✅ Eliminar prendas

## Cada prenda contiene

```bash
title
description
size
brand
condition
```

---

# 🗄️ Base de datos

La aplicación utiliza PostgreSQL mediante **Supabase**.

## Tabla principal

```sql
public.garments
```

## Estructura

```sql
id
owner_id
title
description
size
brand
condition
created_at
updated_at
```

---

# ⚙️ Variables de entorno

Crear un archivo:

```bash
.env.local
```

## Agregar

```env
NEXT_PUBLIC_SUPABASE_URL=TU_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=TU_SUPABASE_ANON_KEY
```

---

# ▶️ Instalación local

## 1. Clonar repositorio

```bash
git clone URL_DEL_REPOSITORIO
```

---

## 2. Entrar al proyecto

```bash
cd swapper
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

## 4. Configurar variables de entorno

Crear:

```bash
.env.local
```

Agregar credenciales de Supabase.

---

## 5. Ejecutar proyecto

```bash
npm run dev
```

---

# 🌐 Acceso local

```bash
http://localhost:3000
```

---

# 📌 Estado actual del proyecto

## Implementado

- ✅ Arquitectura MVC
- ✅ CRUD completo
- ✅ Supabase integrado
- ✅ Autenticación
- ✅ Protección de rutas
- ✅ API Routes
- ✅ Navegación base
- ✅ Tipado TypeScript
- ✅ Formularios semánticos
- ✅ Estructura escalable

---

# 🚧 Próximas mejoras

- Upload de imágenes
- Perfil de usuario
- Feed dinámico
- Matches reales
- Favoritos
- Chat
- Diseño responsive avanzado
- Skeleton loaders
- Toast notifications
- Dark mode
- Filtros y búsqueda
- Sistema de likes
- Match automático entre usuarios

---

# 🧠 Concepto del proyecto

Swapper busca transformar la experiencia de intercambio de ropa mediante un sistema inspirado en aplicaciones tipo Tinder.

## Flujo esperado

1. Usuario sube una prenda
2. Otro usuario da like
3. Si ambos están interesados:
   - se genera un match
   - se habilita un chat
   - coordinan el intercambio

---

# 📚 Objetivo académico

Este proyecto fue desarrollado como práctica profesional para fortalecer conocimientos en:

- Frontend moderno
- Arquitectura escalable
- Backend integrado
- Manejo de sesiones
- APIs REST
- PostgreSQL
- Buenas prácticas con Git
- Estructuración profesional de proyectos

---

# 📸 Capturas 

- Login
<img width="1440" height="748" alt="Captura de pantalla 2026-05-09 a la(s) 10 26 20 p  m" src="https://github.com/user-attachments/assets/60447454-c475-432f-bf78-4c46f3f1ee37" />

- CRUD de prendas
<img width="1439" height="754" alt="Captura de pantalla 2026-05-10 a la(s) 12 30 38 a  m" src="https://github.com/user-attachments/assets/eae28260-cd92-4346-b628-f3afd93a5e59" />


---

# 🧪 Scripts disponibles

## Desarrollo

```bash
npm run dev
```

## Build producción

```bash
npm run build
```

## Ejecutar producción

```bash
npm run start
```

---

# 🧰 Herramientas utilizadas

- Visual Studio Code
- Supabase Dashboard
- GitHub
- Node.js
- npm

---

# 👨‍💻 Autor

Jean Paul Rodríguez

## GitHub

```bash
https://github.com/Jeanpro2004
```

