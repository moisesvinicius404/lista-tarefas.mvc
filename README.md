# 🗂️ Lista de Tarefas — Arquitetura MVC

Um projeto simples desenvolvido em **HTML**, **CSS (Tailwind)** e **JavaScript puro**, aplicando o padrão de arquitetura **MVC (Model-View-Controller)**.  
Este projeto foi criado com foco em **organização de código, separação de responsabilidades e boas práticas** de programação front-end.

---

## 🚀 **Objetivo**

Aprender e demonstrar o uso do **padrão MVC** em um projeto real, entendendo como cada camada funciona:

- **Model:** cuida dos dados (tarefas) e da lógica de armazenamento.
- **View:** manipula o DOM e exibe as tarefas na tela.
- **Controller:** faz a ligação entre o Model e a View, controlando as ações do usuário.

---

## 🧩 **Como o projeto funciona**

1. O usuário digita o nome da tarefa e clica em **"Adicionar"**.  
2. O **Controller** captura o evento e pede ao **Model** para salvar a tarefa.  
3. O **Model** armazena os dados no `localStorage`.  
4. O **Controller** solicita à **View** que atualize a lista exibida.  
5. A **View** mostra a nova tarefa na tela e permite removê-la se necessário.

---

