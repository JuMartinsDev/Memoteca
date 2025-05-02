# 🧠 Memoteca

**Memoteca** é uma aplicação web feita com Angular, que permite o cadastro, visualização, edição e exclusão de pensamentos, ideias ou citações. O objetivo é fornecer uma interface amigável onde usuários possam compartilhar e refletir sobre conteúdos inspiradores.

---

## 🎯 Funcionalidades

Este projeto implementa as operações clássicas de um sistema **CRUD**, com as seguintes funcionalidades:

* **C** - Criar um novo pensamento
* **R** - Ler/visualizar os pensamentos existentes
* **U** - Atualizar um pensamento já cadastrado
* **D** - Deletar um pensamento

---

## 🧱 Tecnologias Utilizadas

* **Angular**: Framework frontend para SPA (Single Page Applications)
* **TypeScript**: Linguagem usada para escrever o código Angular
* **HTML5 e CSS3**: Estrutura e estilização da interface
* **JSON-server**: Servidor fake para simular requisições HTTP REST
* **RxJS**: Para lidar com programação reativa (observables)
* **Angular Router**: Navegação entre páginas
* **Services (Angular)**: Centraliza chamadas HTTP e lógica de negócios
* **HttpClient (Angular)**: Realiza as requisições HTTP ao backend

---

## 🧭 Estrutura do Projeto

```
src/
├── app/
│   ├── editar-pensamento/         # Página de edição
│   ├── listar-pensamento/         # Página de listagem
│   ├── criar-pensamento/          # Página de criação
│   ├── pensamento.service.ts      # Camada de serviço (HTTP)
│   ├── pensamento.ts              # Modelo de dados
│   ├── app-routing.module.ts      # Rotas da aplicação
│   └── app.module.ts              # Módulo principal
├── assets/
├── environments/
└── index.html
```

---

## 📚 Conceitos Importantes

### 📦 CRUD

O projeto é baseado no modelo CRUD (Create, Read, Update, Delete), que define as 4 operações básicas de um sistema com banco de dados.

### 🌐 HTTP + HttpClient

O Angular possui o módulo `HttpClient` que permite realizar chamadas HTTP (GET, POST, PUT, DELETE). Neste projeto, usamos para:

* `GET`: buscar pensamentos existentes
* `POST`: enviar novos pensamentos
* `PUT`: atualizar um pensamento
* `DELETE`: excluir um pensamento

Exemplo:

```ts
return this.http.get<Pensamento[]>(this.API);
```

### 🧰 Services

A lógica de comunicação com a API fica encapsulada em um **Service**. Isso ajuda na organização e reutilização do código.

Exemplo:

```ts
@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  constructor(private http: HttpClient) {}
}
```

### 🚦 Rotas (Routing)

A navegação entre páginas é feita usando o `RouterModule`. Cada rota é associada a um componente.

Exemplo:

```ts
const routes: Routes = [
  { path: '', component: ListarPensamentoComponent },
  { path: 'criar', component: CriarPensamentoComponent },
  { path: 'editar/:id', component: EditarPensamentoComponent }
];
```

### 🔁 Two-Way Data Binding

Usado para vincular valores dos formulários com as variáveis no TypeScript usando `[(ngModel)]`.

---

## ▶️ Como Executar Localmente

1. Clone o repositório:

```bash
git clone https://github.com/JuMartinsDev/Memoteca.git
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor fake JSON (se disponível):

```bash
npx json-server --watch db.json
```

4. Execute o Angular:

```bash
ng serve
```

Acesse a aplicação em: `http://localhost:4200`

---

Para dar start na API:

start:server": "json-server --watch db.json
Depois, use este comando no terminal:
npm run start:server


