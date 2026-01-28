# 📚 Contador de Palavras Repetidas (Node.js)

Este projeto é uma biblioteca desenvolvida em **Node.js** que analisa arquivos de texto e identifica quantas vezes cada palavra se repete.

Projeto criado durante o curso da Alura:

🔗 https://cursos.alura.com.br/course/javascript-node-js-criando-primeira-biblioteca

Repositório do projeto:

🔗 https://github.com/GabrielPanjos/Contador-de-Palavras-Repetidas-Node.js-

---

## 🎯 Objetivo

O objetivo deste projeto foi praticar conceitos fundamentais do desenvolvimento backend com JavaScript, criando uma biblioteca funcional que processa textos via terminal.

A aplicação recebe um arquivo `.txt`, analisa seu conteúdo e retorna a contagem de palavras repetidas.

---

## ⚙️ Funcionalidades

- ✅ Leitura de arquivos `.txt`
- ✅ Contagem de ocorrências de palavras repetidas
- ✅ Processamento de texto no terminal
- ✅ Tratamento de erros durante a execução
- ✅ Estrutura modular organizada em múltiplos arquivos

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/GabrielPanjos/Contador-de-Palavras-Repetidas-Node.js-
```

2. Instale as dependências

```bash
npm install
```

3. Execute no terminal

```bash
Exemplo:

node src/cli.js -t arquivos/texto.txt -d ./resultados
```

🧾 Exemplo de saída
```bash
{
  "javascript": 4,
  "node": 2,
  "texto": 3
}
```
---

## 📌 Aprendizados desenvolvidos no projeto

Durante o desenvolvimento desta biblioteca, pratiquei conceitos essenciais de Node.js e JavaScript, como:

- Criação de bibliotecas e execução via terminal com Node.js  
- Leitura e manipulação de arquivos usando o módulo nativo `fs`  
- Organização do código com funções separadas e módulos (`import/export`)  
- Manipulação de arrays, strings e objetos para análise de texto  
- Tratamento de erros com `try/catch` e uso do objeto `Error`  
- Programação assíncrona com Promises e `async/await`  
- Gerenciamento de pacotes com NPM, incluindo `package.json` e dependências externas 

---

## 🛠️ Tecnologias utilizadas

- Node.js
- JavaScript (ES Modules)
- File System (fs)
- NPM
- Commander.js

---

## 👨‍💻 Autor

Desenvolvido por Gabriel Pereira
Projeto de estudo para praticar Node.js e desenvolvimento de bibliotecas através da Alura.
