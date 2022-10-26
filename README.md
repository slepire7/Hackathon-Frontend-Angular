# Desafio Hackathon Green Software


## Front-end - Angular

## Enunciado

O grupo Green Software Foundation está mapeando o grau de maturidade das empresas com ligação aos seus parceiros quanto aos Objetivos de Desenvolvimento Sustentável (ODS's) e entrou em contato com nossos Gestores solicitando algumas features com grande **Urgência**!

Pela seu bom histórico de atuação em projetos anteriores, você foi um dos especialistas selecionados para entregar esta tarefa dentro do prazo!


Em nosso projeto temos uma Aplicação Web que já disponibiliza uma lista com cards das Empresas.



# A Green Software Foundation precisa das seguintes novas features:

1. Nossa Aplicação Web apresenta uma lista de cards de empresas, sabemos que estas empresas alcançaram algums objetivos ODS's. A Green Software Foudation nos solicitou que ao clicar em um card **seja apresentado um modal com a listagem de ODS's referente a empresa clicada**. 
Obs: a lista de ODS's já está inclusa no objeto empresa.

2. Como a lista de Empresas pode crescer muito, devemos implementar um campo de filtro que permita pesquisar empresas **pelo seu nome** através de palavras chaves digitadas, este campo deve se comportar de forma dinâmica ou seja enquanto estiver digitando a filtragem deverá ir acontecendo.

3. Nossa Aplicação Web possui um icone de jornal localizado no canto superior direito, indicado por uma seta **laranja** que precisa ser implementado. Ao clicar no icone **Notícias** Nossa Aplicação deve apresentar um modal com a lista customizada de notícias publicadas pelo IBGE relacionadas a sustentabilidade, cada item da lista deve conter os seguintes atributos apresentados atravéz de um componente:
* titulo;
* data_publicacao;
* introducao;
* link. (clicável)

Obs: As notícias não virão da nossa base de dados, para obter as notícias devemos utilizar a seguinte API do IBGE: <http://servicodados.ibge.gov.br/api/v3/noticias/?busca=sustentabilidade> (atributo: items).

4. **Entrega** - as entregas devem ser no próprio repositório do código, para isso você deve **criar** no repositório uma branch **com seu nome (EID)** separado por underline ( **_** ) para enviar o código até o dia **06/11 às 22hrs**.

## Considerações:

* A avaliação será sobre o código desenvolvido;
* Caso não termine todas as features solicitadas a tempo **entregue! Seu código será avaliado!**;
* É requisito que o projeto execute corretamente;
* Serão considerados os itens apresentados no último Tech Talks;
* Serão considerados estruturas de pastas e organização do projeto;
* Buscar criar componentes/classes reutilizáveis;
* Buscar utilização os princípios do SOLID;
* Padrões de projeto serão um diferencial;
* Testes unitários não foram solicitados, mas são bem vindos!




# Comandos e dicas

## Ambiente testado
* Angular CLI: 14.2.2
* Node: 16.15.0
* Package Manager: npm 8.19.1

## Executar o projeto
cd .\hackathon-angular\
npm install
ng serve --open

## Criar novo componente
ng generate component <meu-componente>

## Página inicial
<http://localhost:4200/>
