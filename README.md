# 🌎 React Clean Countries Explorer

Aplicación web que muestra un listado de países usando React 19, Zustand, TailwindCSS 4 y GraphQL.
Permite buscar, filtrar por continente y moneda, ver detalles de cada país, optimizada en accesibilidad y rendimiento.

---

## 🚀 Tecnologías usadas

- React 19
- Vite 5
- Tailwind CSS 4
- Apollo Client
- GraphQL API (https://countries.trevorblades.com/)
- Radix UI
- Lucide React Icons
- Vitest + Testing Library

---

## 📂 Estructura del proyecto

```
src/
├── application
│   └── use-cases
│       ├── useCountries.ts
│       └── useLogin.ts
├── App.tsx
├── components
│   └── ui
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── loader.tsx
│       ├── popover.tsx
│       └── select.tsx
├── domain
│   └── entities
│       └── Country.ts
├── graphql
│   └── queries
│       └── getCountries.ts
├── index.css
├── infrastructure
│   ├── persistence
│   └── services
├── lib
│   ├── apolloClient.ts
│   ├── stores
│   │   └── auth-store.ts
│   └── utils.ts
├── main.tsx
├── __mocks__
│   └── countries.ts
├── presentation
│   ├── components
│   │   ├── common
│   │   │   └── PageHeader.tsx
│   │   ├── countries
│   │   │   ├── CountriesContent.tsx
│   │   │   ├── CountriesError.tsx
│   │   │   ├── CountriesFilters.tsx
│   │   │   ├── CountriesGrid.tsx
│   │   │   ├── CountriesLoading.tsx
│   │   │   └── CountryItem.tsx
│   │   ├── __tests__
│   │   │   ├── ContinentCombobox.test.tsx
│   │   │   ├── CountriesFilters.test.tsx
│   │   │   ├── CountriesGrid.test.tsx
│   │   │   ├── CountryItem.test.tsx
│   │   │   ├── CurrencyCombobox.test.tsx
│   │   │   └── SearchInput.test.tsx
│   │   └── ui
│   │       ├── ContinentCombobox.tsx
│   │       ├── CurrencyCombobox.tsx
│   │       ├── CustomCombobox.tsx
│   │       └── SearchInput.tsx
│   ├── layouts
│   │   ├── MainLayout.tsx
│   │   └── __tests__
│   │       └── MainLayout.test.tsx
│   ├── pages
│   │   ├── CountryDetailPage.tsx
│   │   ├── ListPage.tsx
│   │   ├── LoginPage.tsx
│   │   └── __tests__
│   │       └── CountryDetailPage.test.tsx
│   └── routes
│       ├── AppRoutes.tsx
│       └── PrivateRoute.tsx
└── styles
    └── animations.css
```

---

## 📄 Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/cliffdaniel/react-clean-countries.git

# Entrar al proyecto
cd react-clean-countries

# Instalar dependencias
npm install

# Ejecutar proyecto en desarrollo
npm run dev

# Ejecutar pruebas
npm run test
```

---

## 🧪 Testing

El proyecto tiene test unitarios para:
Frameworks usados:

- Vitest
- @testing-library/react
- @testing-library/jest-dom

Para correr los test:

```bash
npm run test
```

---

## ✨ Características principales

- 🔎 Búsqueda en tiempo real de países.
- 🌎 Filtrado dinámico por continente y moneda (con buscador integrado).
- 📄 Vista detallada de cada país (nombre, código, bandera, continente, capital, idiomas).
- ♿ Accesibilidad web completa (WAI-ARIA, roles correctos, navegación teclado).
- 📱 100% Responsivo en todos los dispositivos.
- 🚀 Uso de `useDeferredValue` y `useTransition` para mejorar la experiencia de usuario.
- 🎨 Fondo dinámico animado en toda la aplicación.

---

## 💻 Autor

Hecho con ❤️ por **Daniel Arenas**.

---
