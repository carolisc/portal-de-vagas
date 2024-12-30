# Padrões de Git

## Branches
As branches deverão ser escritas em português com letras minúsculas.

### Nomenclatura
Deve seguir a nomenclatura:
- No ínicio conter um Conventional Commit de acordo com o motivo da criação da branch.
- Escrever o nome da branch com `kebab-case`.
<br>Ficando da seguinte forma: **feat/branch-name**.

## Commits
Estamos usando a lib comitizem para automatizar o processo de commit usando convesão de commit. 

Para iniciar um commit use:
```sh
yarn commmit
```
\* Para auxiliar, acessar <kbd>[package.json](../../../package.json)</kbd> em 'scripts' estão as chamadas de comando.

Os commits deverão ser escritas em inglês com letras minúsculas.

### Nomenclatura
Deve seguir a nomenclatura:
- No ínicio conter um Conventional Commit, adicionando ":" e depois a mensagem do commit.
<br>Ficando da seguinte forma: **feat: mensagem do commit**.

\* Para saber mais sobre [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/). <br>
\* O `kebab-case` trata-se de uma [Convenção de nomenclatura](https://www.alura.com.br/artigos/convencoes-nomenclatura-camel-pascal-kebab-snake-case).
