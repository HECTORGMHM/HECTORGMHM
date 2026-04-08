# Héctor Gael Morales Moreno — CV Web

Sitio web estático personal que funciona como CV/portafolio, desplegado en [GitHub Pages](https://hectorgmhm.github.io/HECTORGMHM/).

## Estructura del proyecto

```
├── index.html           # SPA principal (contiene todas las secciones)
├── styles.css           # Estilos globales (tema oscuro minimalista)
├── script.js            # Navegación dinámica (hash-based SPA)
├── header.html          # Sección hero / encabezado (standalone)
├── experiencia.html     # Experiencia laboral (standalone)
├── eduacion.html        # Educación académica (standalone)
├── skills.html          # Habilidades técnicas y blandas (standalone)
├── certificaciones.html # Certificaciones obtenidas (standalone)
├── lenguajes.html       # Idiomas (standalone)
├── intereses.html       # Intereses personales/profesionales (standalone)
└── .github/
    └── workflows/
        └── static.yml   # Workflow de GitHub Actions para despliegue automático
```

## Despliegue en GitHub Pages

El sitio se despliega automáticamente en cada `push` a `main` gracias al workflow de GitHub Actions (`.github/workflows/static.yml`).

### Activar GitHub Pages (primera vez)

1. Ve a tu repositorio en GitHub.
2. Haz clic en **Settings** → **Pages**.
3. En **Build and deployment** → **Source**, selecciona **GitHub Actions**.
4. Guarda los cambios.

A partir de ahí, cada push a `main` publicará los cambios automáticamente.

### Ver el sitio en producción

```
https://hectorgmhm.github.io/HECTORGMHM/
```

## Cómo editar las secciones

| Sección | Archivo a editar |
|---|---|
| Hero / datos personales | `index.html` — `<section id="hero">` |
| Experiencia | `index.html` — `<section id="experiencia">` |
| Educación | `index.html` — `<section id="educacion">` |
| Habilidades | `index.html` — `<section id="skills">` |
| Certificaciones | `index.html` — `<section id="certificaciones">` |
| Idiomas | `index.html` — `<section id="lenguajes">` |
| Intereses | `index.html` — `<section id="intereses">` |
| Contacto | `index.html` — `<section id="contacto">` |
| Estilos globales | `styles.css` |

## Tecnologías

- **HTML5** — estructura semántica
- **CSS3** — diseño responsivo, tema oscuro
- **JavaScript** — navegación SPA sin recarga
- **GitHub Actions** — CI/CD para despliegue automático
- **GitHub Pages** — hosting estático gratuito
