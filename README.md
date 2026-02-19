🏠 Lista de Chá de Panela

Aplicação web desenvolvida em React para organizar nossa lista de presentes do chá de panela. A ideia é permitir que amigos e familiares escolham um presente de forma simples e prática.

O projeto exibe os itens desejados, seus valores, e direciona diretamente para o link de compra.

✨ Sobre o Projeto

Este projeto foi criado para facilitar a visualização e seleção de presentes para nosso chá de panela.

A interface é simples, direta e pensada para que qualquer pessoa consiga:

- Visualizar os presentes disponíveis

- Ver o valor de cada item

- Acessar rapidamente o link de compra

- Confirmar a escolha de um presente

🚀 Funcionalidades

✔ Exibição dos presentes em formato de cards
✔ Imagem ilustrativa de cada item
✔ Valor do produto
✔ Botão de seleção
✔ Redirecionamento para Amazon
✔ Modal de confirmação
✔ Integração com Google Sheets / SheetMonkey

🛠 Tecnologias Utilizadas

- React

- TypeScript

- Styled Components 

- Integrações via API (SheetMonkey / Google Apps Script)

📦 Estrutura Básica

O projeto é organizado em componentes, incluindo:

- Header → Apresentação do evento + versículo

- Lista de Presentes → Renderização dinâmica dos itens

- Modal → Confirmação da escolha

- Estilos → Componentes estilizados

🎁 Como Funciona

1-O usuário acessa a página

2-Visualiza os presentes disponíveis

3-Seleciona um item

4-Confirma no modal

5-É redirecionado para o link de compra

6-As seleções podem ser registradas em uma planilha, dependendo da integração ativa.

⚙ Personalização

A lista de presentes é controlada por um array de objetos:

type Gift = {
  id: number
  title: string
  price: string
  image: string
  amazonLink: string
}


Novos itens podem ser adicionados facilmente editando o array gifts.

💡 Objetivo

Além de resolver uma necessidade real (nosso chá de panela 😄), o projeto também serviu como prática de:

- Componentização em React

- Manipulação de estado

- Estruturação de dados

- Integração com serviços externos

Observação

Este é um projeto pessoal desenvolvido com carinho para um momento muito especial das nossas vidas.