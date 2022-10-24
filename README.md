# Web de la Asociación Python España

## Para developers

Pasos para instalar e iniciar el sistema:

0. Instalar el gestor de versiones de node [`nvm`](https://github.com/nvm-sh/nvm)
1. Clonarlo este repo: `git clone git@github.com:python-spain/web-ng.git` y acceder al directorio.
2. Instalar la versión de node correspondiente (en .nvmrc) `nvm install`
3. Activar la versión de node correspondiente: `nvm use`.
4. Instalar gatsby-cli: `npm install -g gatsby-cli`
5. Instalkar las dependencias de la web `npm ci` para instalar todo.
6. Ejecutar `gatsby develop` para iniciar el servidor.
7. El sitio debería ser visible en http://localhost:8000/.

El contenido a editar está en:

-   `src/content`.
-   `src/data`.
-   Site metadata: `gatsby-config.js`

El diseño a editar está en:

-   `src/pages`
-   `src/templates`
-   `src/components`

Basado en https://github.com/zerostaticthemes/gatsby-serif-theme.

## Agregar un post/evento:

Para agregar un post/evento puedes seguir las instrucciones que se encuentran en nuestra guía de [contribución](https://github.com/python-spain/web-ng/blob/main/CONTRIBUTING.md).

## Web features

-   Gatsby v3
-   Theme: Gatsby Serif Theme
-   Multi-page theme (not just a blog) that uses Markdown for multiple content-types/templates. It uses `gatsby-transformer-remark` and has several examples of querying and filtering `allMarkdownRemark`
-   Includes a graphql query in `gatsby-node.js` that creates pages and templates by content type based on the folder `src/pages/services`, `src/pages/team`,
-   Services (Markdown)
-   Team (Markdown)
-   Testimonials (Markdown)
-   Features (Data)
-   SCSS using `gatsby-plugin-sass`
-   Responsive design
-   Bootstrap 4 grid and media queries only
-   Responsive menu
-   Robust example content included
-   Royalty free illustrations included
-   SEO Titles & Meta using `gatsby-plugin-react-helmet`