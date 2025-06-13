# Projeto Blazor em c#.NET + VB.NET com Firebase, Mobile em ReactNative - Todos App

Este projeto são duas aplicações de gerenciamento de tarefas (Todos) desenvolvida com **Blazor** e a outra com **ReactNative**, ambas conectadas ao mesmo **Firebase Firestore** para armazenamento de dados em nuvem.

## Instruções de Execução
1. **Pré-requisitos:**
- .NET 8 ou superior
- Node v18 ou superior
- Conta e projeto no Firebase
- Recupere suas Credenciais do Firebase e armazene em
 - Para o .NET /distributedapplications-credentials.json (Exato mesmo arquivo baixado do firebase)
 - Para o ReactNative /ReactNativeApiClient/.env (Mudar as credencias de formato JSON para declaração de variaveis de ambiente)

2. **Executar Projetos**:
```bash
# Clonar o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2.1. .NET
```bash
# Restaurar e compilar:
dotnet restore
dotnet build

# Executar o projeto:
dotnet run

# Acessar no navegador:
http://localhost:5000
```

2.2. ReactNative
```bash
# Baixar dependências
npm install

# Executar expo start
npx expo start --clean

# Então leia o QR Code com o seu celular
```

## Como Testar
### .NET
* Acesse a interface principal e utilize o formulário para criar novas tarefas.
* Utilize o botão “Complete” para marcar uma tarefa como concluída (ou “Restore” para desfazer).
* Os dados serão salvos e sincronizados em tempo real no Firestore.

### ReactNative
* Utilize o formulário no topo da tela para criar novas tarefas
* Clicar no switch a direita do card da tarefa marcará ela como concluida
* Segurar o dedo por alguns segundos em cima do card mostrara uma tela de detalhamento, com a opção de deletar o registro
* Arrastar para baixo irá recarregar as tarefas

### Tecnologias Utilizadas

* **Blazor Server** (.NET 8 ou superior)
* **Google.Cloud.Firestore** (SDK oficial do Firebase para .NET)
* **Bootstrap 5** (para estilização dos componentes)
* **Firebase Firestore** (banco de dados NoSQL em tempo real)
* **React** v19.0
* **React Native** v0.79
* **Firebase Javascript SDK** v11.9
* **Node** v18.19

### Estrutura do Banco de Dados (Firestore)
* **Collection:** `todos`
  * Cada documento representa uma tarefa (`Todo`) com os campos:
    * `Id` (string): identificador único
    * `Name` (string): título da tarefa
    * `Description` (string): descrição da tarefa
    * `Done` (bool): indica se a tarefa foi concluída

### Comunicação com o Firebase
* A aplicação utiliza a SDK `Google.Cloud.Firestore` com o .NET e no React Native é utilizada a biblioteca mais recente disponivel no repositorio npm.
