# Projeto WEB2 

## Requisitos

### Rotas:
- Usuários
    - cadastrar
    - deletar
    - editar
    - listar usuarios com maior numero de curtidas nas suas postagens
    - busca por nome

- Postagem
    - cadastrar
    - deletar
    * deve ser possivel consultar todas as postagens feitas por um determinado usuario
    * deve ser possivel curtir postagens (acho que deve ser um boolean opnicional no model, e a curtida é uma edição dele pra true)
    * deve estar vinculada a um unico usuario

- Comentarios
    - cadastrar e apagar comentarios pra cada postagem
    - listar todos os comentarios de uma postagem

### Outros requisitos:
- apresentar o teste de todas as rotas
- tratar um status de resposta que não seja 200
- documentar com o swagger