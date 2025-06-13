# Projeto Blazor + Firebase - Todos App

Este projeto é uma aplicação de gerenciamento de tarefas (Todos) desenvolvida com **Blazor** e conectada ao **Firebase Firestore** para armazenamento em nuvem.

## Instruções de Execução
1. **Pré-requisitos:**
- [.NET 8 ou superior](https://dotnet.microsoft.com/en-us/download)
- Conta e projeto no [Firebase](https://console.firebase.google.com/)
- SDKs do Firebase configurados

2. **Executar Projeto**:
```bash
# Clonar o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# Restaurar e compilar:
dotnet restore
dotnet build

# Executar o projeto:
dotnet run

# Acessar no navegador:
http://localhost:5000
```

## Como Testar

* Acesse a interface principal e utilize o formulário para criar novas tarefas.
* Utilize o botão “Complete” para marcar uma tarefa como concluída (ou “Restore” para desfazer).
* Os dados serão salvos e sincronizados em tempo real no Firestore.

### Tecnologias Utilizadas

* **Blazor Server** (.NET 8 ou superior)
* **Google.Cloud.Firestore** (SDK oficial do Firebase para .NET)
* **Bootstrap 5** (para estilização dos componentes)
* **Firebase Firestore** (banco de dados NoSQL em tempo real)

### Estrutura do Banco de Dados (Firestore)
* **Collection:** `todos`
  * Cada documento representa uma tarefa (`Todo`) com os campos:
    * `Id` (string): identificador único
    * `Name` (string): título da tarefa
    * `Description` (string): descrição da tarefa
    * `Done` (bool): indica se a tarefa foi concluída

### Comunicação com o Firebase
* A aplicação utiliza a SDK do `Google.Cloud.Firestore` para interagir com o Firestore.
