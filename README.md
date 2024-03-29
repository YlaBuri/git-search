# git Search

O projeto se divide em dois modulos. o `git-search-api` é o back-end do projeto feito em Java versão 17, usando a versão 3.0.5 do Spring boot. O `git-search-client` é o front-end do projeto feito em React na versão 18.

## Executando o projeto

Como existem dois modulos diferentes, é preciso executar cada modulo separadamente

### Executanto o projeto do back-end

Pelo intellij ou eclipse, dar run no projeto. Ou via terminal executando o comando `mvn spring-boot:run`

### Executanto o projeto do front-end

Rodar `npm install` no terminal dentro do diretório `git-search-client` para atualizar as dependencias ou baixa-las se estiver executando pela primeira vez. Se é a primeira vez que roda o comando deve ser gerada a pasta `node_modules`

Depois que as dependencias foram instaladas corretamente, rodar `npm start` para subir o projeto para o servido local

Pelo navegador, acessar `http://localhost:3000/`, as alterações salvas são carregadas automaticamente

### Passos seguidos para o desenvolvimento

- Definir os objetos no back-end de acordo com o json da API do GitHub.
- Criar o service para acessar a API e converter o retorno nos objetos criados.
- Criar os endpoints que serão acessado pelo cliente.
- Definir os objetos no projeto do front-end de acordo com o json da API.
- Criar os compents necessários para exibir as infromações.
- Usar o axios para acessar a API.
- Usar flexbox para posicionar os elementos.
- Usar css para melhorar a exibição no front-end.
- Usar o css e o flexbox para criar a responsividade.

