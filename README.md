# Tiago Amaral — Gestão de Tráfego

Site institucional estático em HTML, CSS e JavaScript, preparado para GitHub Pages.

## Estrutura

- `index.html` — página principal
- `privacy.html` — política de privacidade
- `css/style.css` — identidade visual e responsividade
- `js/main.js` — menu, header e animações progressivas
- `assets/images/` — imagens otimizadas em WebP e Open Graph
- `favicon.svg`
- `robots.txt`
- `sitemap.xml`

## Antes de publicar

Há apenas dois dados que dependem de informações que não foram fornecidas e, por isso, **não foram inventados**:

2. Quando a URL final do GitHub Pages existir, substitua `BASE_URL` em `sitemap.xml` pela URL sem barra final e acrescente a URL absoluta do sitemap em `robots.txt`.

Exemplo de BASE_URL: `https://usuario.github.io/tiago-amaral-trafego`

Depois desses dois ajustes, o projeto não exige build, dependências ou servidor. Basta publicar os arquivos.
