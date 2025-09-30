# 📌 User Manager App

Una aplicación de gestión de usuarios construida con **React**, **TypeScript** y **Tailwind CSS**.
El proyecto está diseñado como ejercicio práctico para consolidar conceptos fundamentales de React, incluyendo estados locales y globales, hooks personalizados, manejo de formularios, fetch de datos y optimización de componentes.

---

## 🚀 Funcionalidades principales

* **Dashboard de usuarios**

  * Obtención de lista de usuarios desde una API pública (`https://jsonplaceholder.typicode.com/users`).
  * Estados de carga y error.
  * Optimización del `fetch` con `useEffect`.

* **Agregar usuario**

  * Formulario interactivo con campos de **nombre, correo y rol**.
  * Validaciones básicas.
  * Mostrar/ocultar el formulario con un toggle.

* **Contador de usuarios**

  * Estado global con **Context API + useReducer**.
  * Hook personalizado `useCounter`.
  * Optimización con `React.memo`.

* **Editar y eliminar usuario**

  * Botones de acción en cada tarjeta/lista.
  * Actualización global del estado en toda la aplicación.

* **Toggle de vista**

  * Cambiar entre **modo lista** y **modo tarjetas (grid)**.

* **Tipado con TypeScript**

  * Props, estados, reducers y contextos fuertemente tipados.
  * Componentes reutilizables y seguros.

* **Estilizado con Tailwind CSS**

  * Diseño **responsive y moderno**.
  * Botones, formularios y tarjetas estilizadas.

---

## 📂 Estructura del proyecto

```
src/
│
├─ components/
│   ├─ UserList.tsx          // Lista de usuarios
│   ├─ UserCard.tsx          // Tarjeta individual de usuario
│   ├─ UserForm.tsx          // Formulario de agregar/editar usuario
│   ├─ Counter.tsx           // Contador reutilizable
│   └─ ToggleButton.tsx      // Botón para cambiar vista
│
├─ context/
│   └─ UserContext.tsx       // Context API + useReducer
│
├─ hooks/
│   └─ useCounter.ts         // Hook personalizado
│
├─ types/
│   └─ types.ts              // Tipos para User, Props, etc.
│
├─ pages/
│   └─ Dashboard.tsx         // Página principal
│
├─ App.tsx
└─ index.tsx
```

---

## 🧩 Componentes y conceptos aplicados

| Componente       | Conceptos aplicados                                                          |
| ---------------- | ---------------------------------------------------------------------------- |
| **UserList**     | `fetch`, `useEffect`, manejo de errores, renderizado de lista                |
| **UserCard**     | Props tipadas, optimización con `React.memo`                                 |
| **UserForm**     | `useState`, manejo de inputs, validaciones, toggle del formulario            |
| **Counter**      | `useReducer`, `Context API`, hook personalizado (`useCounter`), `React.memo` |
| **ToggleButton** | `useState`, eventos, cambio de vista (grid/list)                             |
| **App**          | Context Provider global, estructura de la aplicación                         |
| **useCounter**   | Hook personalizado reutilizable                                              |
| **TypeScript**   | Tipado de props, estados, funciones, reducers y contextos                    |

---

## 🔄 Flujo de la aplicación

1. `App` envuelve todo con `UserProvider`.
2. `Dashboard` carga la lista de usuarios desde la API con `useEffect`.
3. `UserList` muestra usuarios usando `UserCard`.
4. `UserForm` permite agregar/editar usuarios.
5. `Counter` muestra y controla el número global de usuarios.
6. `ToggleButton` alterna entre vista **lista** y **grid**.
7. Los cambios se reflejan globalmente gracias a **Context API + useReducer**.

---

## 🎯 Extras de aprendizaje

* **Optimización** con `React.memo` y dependencias correctas en `useEffect`.
* **Manejo de estados complejos** con `useReducer`.
* **Hooks personalizados** para reutilización.
* **Tipado avanzado en TypeScript** para seguridad y escalabilidad.
* **Estilos modernos con Tailwind CSS**, responsive y claros.

---

## ▶️ Instalación y ejecución

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tuusuario/user-manager-app.git
   cd user-manager-app
   ```

2. Instala dependencias:

   ```bash
   npm install
   ```

3. Ejecuta en modo desarrollo:

   ```bash
   npm start
   ```

4. Abre en tu navegador:

   ```
   http://localhost:3000
   ```

---

## 📚 Tecnologías utilizadas

* [React 18](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* Context API + useReducer
* Hooks personalizados (`useCounter`)


