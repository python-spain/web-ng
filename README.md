# Gatsby Serif Theme

Pasos para instalar e iniciar el sistema:

1. Instalar gatsby-cli: `npm install -g gatsby-cli`
2. Clonarlo este repo: `git clone git@github.com:python-spain/web-ng.git`.
3. Ir al directorio nuevo y ejecutar `npm i` para instalar todo.
4. Ejecutar `gatsby develop` para iniciar el servidor.
5. El sitio debería ser visible en http://localhost:8000/.


El contenido a editar está en:
- `src/content`.
- `src/data`.
- Site metadata: `gatsby-config.js`


El diseño a editar está en:
- `src/pages`
- `src/templates`
- `src/components`


Basado en https://github.com/zerostaticthemes/gatsby-serif-theme.

## Theme features

- Gatsby v3
- Multi-page theme (not just a blog) that uses Markdown for multiple content-types/templates. It uses `gatsby-transformer-remark` and has several examples of querying and filtering `allMarkdownRemark`
- Includes a graphql query in `gatsby-node.js` that creates pages and templates by content type based on the folder `src/pages/services`, `src/pages/team`,
- Services (Markdown)
- Team (Markdown)
- Testimonials (Markdown)
- Features (Data)
- SCSS using `gatsby-plugin-sass`
- Responsive design
- Bootstrap 4 grid and media queries only
- Responsive menu
- Robust example content included
- Royalty free illustrations included
- SEO Titles & Meta using `gatsby-plugin-react-helmet`
- ESLint
