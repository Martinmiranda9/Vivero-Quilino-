# 🌱 Vivero Quilino – Plataforma Web

Aplicación web para gestión y exhibición de productos del Vivero Productivo de Quilino, con panel administrador, integración con WhatsApp y Cloudinary.

## 🚀 Tecnologías Principales

### Frontend
* **Angular 20**
* Angular Material
* Responsive UI

### Backend
* **Node.js + Express**
* TypeORM
* PostgreSQL
* JWT
* Cloudinary SDK

### Infraestructura
* **Docker + Docker Compose**
* Railway (API + DB en producción)
* Vercel (frontend producción)

---

## 📦 Características del Sistema

* Gestión completa de productos
* Categorías + subcategorías
* Carga de imágenes (Cloudinary)
* Panel administrador
* Enlaces directos a WhatsApp
* API REST
* Autenticación con JWT
* Despliegue automatizado

---

## 🛠️ Instalación manual

### Backend

```bash
git clone https://github.com/Rocio-Medran/vivero-quilino
cd backend
npm install
npm run dev
```

### Frontend

``` bash
cd frontend
npm install
ng serve
```

---

## ⚙️ Variables de Entorno

Crea un archivo **.env** en la carpeta del backend:

```bash
PORT=4000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=vivero_db

JWT_SECRET=xxxxxxxxxx

CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx

FRONTEND_URL=http://localhost:4200
NODE_ENV=development
```

---

## 🐳 Instalación con Docker

```bash
docker-compose up --build
```

### Accesos locales:

* Frontend: http://localhost:4200

* Backend: http://localhost:4001/api

* PostgreSQL: localhost:5432

---

### 🗄️ Seeders

### Ejecutar seed local:

```bash
npm run seed
```

### Ejecutar seed en docker:

```bash
npm run seed:docker
```

---

## 📂 Estructura del Repo

```
/
├── backend/
├── frontend/
├── .gitignore
└── README.md
```

--- 

### 👤 Equipo de Desarrollo

* Rocio Medran — Backend, Base de Datos, DevOps

* Priscila Córdoba — Scrum Master, Frontend Support, Diseño

* Gabriel Córdoba — Product Owner, Backend Support

* Martín Miranda — Frontend, Diseño UX/UI

* Augusto Aguirre — QA Testing


