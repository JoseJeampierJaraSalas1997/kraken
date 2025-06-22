# 🍽️ Sistema Restaurantes Kraken

Sistema de gestión integral para restaurantes, desarrollado por **Jose Jara**, con arquitectura escalable basada en **monorepo (NestJS + Next.js + Firebase + TailwindCSS)**. 

---

## 🚀 Tecnologías Principales

- 🔧 Backend: [NestJS](https://nestjs.com/) + Firebase Admin SDK
- 🎨 Frontend: [Next.js](https://nextjs.org/) + Tailwind CSS + Firebase Web SDK
- ☁️ Base de datos: [Firebase Firestore]
- 🔐 Autenticación: Firebase Auth
- 📦 Arquitectura: Monorepo modular
- 🧪 Testing: Jest + Supertest
- 🔧 DevOps: Docker + PM2 (ready)

---

## 📦 Estructura del proyecto

```

restaurant-system/
├── apps/
│   ├── backend/        # NestJS backend
│   └── web/            # Next.js frontend con Tailwind
├── libs/
│   ├── firebase/       # Inicializadores cliente y admin
│   ├── dtos/           # Data Transfer Objects compartidos
│   ├── types/          # Tipos globales reutilizables
│   └── license/        # Lógica de validación y generación de licencias
└── docs/
└── LICENSE.md      # Licencia de uso comercial

````

---

## 🧩 Módulos implementados

### ✅ 1. Autenticación y Seguridad
- Login por email y contraseña (Firebase Auth)
- Middleware y Guards para proteger rutas
- Roles: administrador, mesero, cocina, caja

---

### ✅ 2. Gestión de Comandas
- Crear comanda por mesa y sede
- Agregar, editar o eliminar productos
- Estado: pendiente, en cocina, servido, cobrado
- Historial por usuario y sede

---

### ✅ 3. Cancelaciones de Comandas
- Por usuario (error en pedido)
- Por consumo (cliente desiste)
- Registro de motivo, responsable y hora
- Reportes exportables

---

### ✅ 4. Gestión de Caja
- Apertura y cierre de caja por usuario
- Control de ingresos, egresos y saldo final
- Registro automático de ventas
- Cierre validado con contraseña de responsable

---

### ✅ 5. Registro de Gastos
- Registro diario por sede
- Categorización: insumos, operativos, emergencias, etc.
- Responsable y observaciones
- Reportes mensuales

---

### ✅ 6. Inventario y Menús
- Gestión de platos, menús y bebidas
- Categorización por tipo: entrada, fondo, bebida, combo
- Imagen, precio, descripción y stock (opcional)
- Control de stock (manual o automático)

---

### ✅ 7. Gestión de Sedes
- Crear y configurar múltiples sedes
- Asignar usuarios, productos y configuraciones específicas
- Reportes por sede o agrupados

---

### ✅ 8. Licenciamiento Comercial
- Clave única por sede
- Validación automática desde backend NestJS
- Desactivación remota
- Registro en Firestore

---

### ✅ 9. Reportes y Exportaciones
- Comandas por usuario, sede y día
- Gastos vs ingresos
- Cierre de caja
- Exportación en PDF y CSV

---

## 🔐 Validación de Licencia

Cada instalación del sistema requiere una **clave de licencia válida** emitida por el desarrollador. Esta clave:

- Se almacena en Firestore
- Se verifica al iniciar el backend
- Está asociada a una sede y RUC/DNI

---

## 🛠️ Scripts de desarrollo

```bash
npm run dev           # Inicia frontend y backend en modo desarrollo
npm run dev:web       # Solo frontend Next.js
npm run dev:backend   # Solo backend NestJS
npm run build         # Compila todo el sistema
````

---

## 📦 Despliegue en Producción

1. Instalar Node.js 18+, Docker, y PM2
2. Configurar claves Firebase en `.env`
3. Ejecutar:

```bash
npm run build
pm2 start apps/backend/dist/main.js --name backend
pm2 start npm --name web -- start --prefix apps/web
```

---

## 🧠 Créditos

Desarrollado por [Jose Jara](https://pe.linkedin.com/in/jose-jeampier-jara-salas-882a03236)
© 2025 Kraken Systems — Todos los derechos reservados.
