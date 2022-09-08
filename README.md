# Search Articles

![](app.png)

O Search Articles é um site que lista artigos científicos através de requisições a uma api.

## 🔨 Funcionalidades do projeto

<ol>
  <li>Deve ser possível buscar por artigos científicos na API.</li>
  Exibir na listagem:
  <ul>
    <li>authors</li>
    <li>type</li>
    <li>title</li>
    <li>description</li>
    <li>urls (devem ser clicáveis e abrir em uma nova aba)</li>
  </ul>
  <li>Deve ser possível marcar/desmarcar os resultados da pesquisa como favorito.</li>
  <li>Deve ter uma listagem com os artigos favoritados e ela deve estar disponível mesmo que a janela do navegador seja fechada e aberta novamente.</li>
  <li>As listagens, tanto da pesquisa quanto dos favoritos, devem ter paginação.</li>
</ol>

## ✔️ Técnicas e tecnologias utilizadas

Lista de tecnologias que foram usadas nesse projeto:

- `ReactJS`
- `React Hooks`
- `axios`
- `react toastify`
- `git`
- `sass`
- `css modules`
- `React Icons`
- `Docker`

## 🛠️ Abrir e rodar o projeto

### Local

Para abrir e rodar o projeto, execute npm i para instalar as dependências e npm start para iniciar o projeto.

Depois, acesse <a href="http://localhost:3000/">http://localhost:3000/</a> no seu navegador.

### Usando Docker

Se tiver o docker-compose instalado no computador, após clonar o projeto basta rodar o comando abaixo para criar e iniciar os contêineres:

```
docker-compose up -d
```

Para paralisar e remover todos os contêineres use o comando:

```
docker-compose down
```

### Projeto em produção

Este projeto pode ser visualizado neste [link](https://search-articles.vercel.app/).

### Testes

```
npm test
```


## 📚 Mais informações

Entre em contato pelo [linkedin](https://www.linkedin.com/in/grazziano-fagundes/).
