# 📚 Projeto

Este repositório contém a documentação do projeto utilizando [Docusaurus](https://docusaurus.io/).

## 🚀 Começando

### 1. Clonar o Repositório

Clique no botão verde **Code** no GitHub e selecione **Open with GitHub Desktop** para clonar o projeto localmente.

### 2. Instalar Dependências

Após clonar o projeto, execute:
```bash
npm i
```

## 📁 Estrutura do Projeto

A pasta **`docs/`** é onde toda a documentação é mantida usando o Docusaurus.

⚠️ **Importante:** 
- **NÃO crie novas subpastas** dentro de `docs/`
- **USE as pastas existentes** para organizar seu conteúdo
- **SIGA o padrão** dos arquivos já existentes no Docusaurus

## 💻 Desenvolvimento Local

Para rodar o projeto localmente:
```bash
npm start
```

O site será aberto automaticamente em `http://localhost:3000`

## 📝 Commits

Este projeto utiliza [Conventional Commits](https://www.conventionalcommits.org/). 

**Exemplos:**
```
feat: adiciona nova seção de API
docs: atualiza guia de instalação
fix: corrige link quebrado na documentação
```

## 🔄 Processo de Pull Request

1. Crie uma branch para suas alterações
2. Faça commit das mudanças seguindo o padrão Conventional Commits
3. Abra um Pull Request
4. **Aguarde a revisão de pelo menos 1 pessoa**
5. Após aprovação, faça o merge

## 🚀 Deploy

⚠️ **ATENÇÃO:** 
- O deploy é **AUTOMÁTICO** via GitHub Actions
- Quando um PR é mergeado na branch principal, o workflow de deploy é acionado automaticamente
- **NÃO faça deploy manual do Docusaurus**
