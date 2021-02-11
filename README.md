# Desafio para o Programa de Formação em Elixir - Stone

## O Desafio:

Imagine uma lista de compras. Ela possui:

- Itens
- Quantidade de cada item
- Preço por unidade/peso/pacote de cada item

Desenvolva uma função (ou método) que irá receber uma lista de compras (como a detalhada acima) e uma lista de e-mails. Aqui, cada e-mail representa uma pessoa.

A função deve:

- Calcular a soma dos valores, ou seja, multiplicar o preço de cada item por sua quantidade e somar todos os itens
- Dividir o valor de forma igual entre a quantidade de e-mails
- Retornar um mapa/dicionário onde a chave será o e-mail e o valor será quanto ele deve pagar nessa conta

## Tecnologia escolhidas para resolver o desafio:
- Node JS
- Typescript

## Para executar a solução:
- Clone ou faça o download esse repositorio para o seu computador.
- No seu computador, utilizando terminal, navegue até o diretorio onde você salvou esse repositorio.
- Para instalar as dependências, execute o seguinte código no terminal:
```json
yarn install
```
- Aguarde terminar a instalação das dependências.
- Para executar o programa, execute o seguinte código no terminal:
```json
yarn dev:server
```
**⚠️ IMPORTANTE**
- Para modificar as listas de emails e itens a serem utilizadas no programa, é necessario editar os arquivos .JSON contidos na pasta Files.

## Pontos importantes do programa:
### Comportamento para erros:
- [x] Listas vazias:
  ```
  The email list is empty! Please fill the email list.
  ```
  ```
  The items list is empty! Please fill the items list.
  ```
- [x] Item com quantidade ou preço < 0:
  ```
  The item ${item.Name} has negative values and negative values are not allowed! Please check the item values.
  ```
- [x] Emails duplicados na lista:
  ```
  The following emails are duplicated:

  ${duplicatedEmails}

  Please delete the duplicate from the email list.
  ```
- [x] Propriedades faltando na lista de itens:
  ```
  The Price propertie of the item ${item.Name} is missing.
  ```
  ```
  The Quantity propertie of the item ${item.Name} is missing.
  ```
- [x] Valores não inteiros no Preço ou Quantidade na lista de itens:
  ```
  The item ${item.Name} Price is not an integer.
  ```
  ```
  The item ${item.Name} Quantity is not an integer.
  ```
### Formula utilizada para garantir a divisão dos valores em partes iguais e sem valores flutuantes:

![Formula](https://user-images.githubusercontent.com/63657280/107700970-01251100-6c97-11eb-9ca4-41220df959df.JPG)

###

### Exemplo da saída gerada pelo programa:

![Output](https://user-images.githubusercontent.com/63657280/107701683-fe76eb80-6c97-11eb-9745-5002f3b385f1.JPG)
##### Obs: Para garantir que a ordem da lista de emails não influencie em que irá pagar menos, foi utilizado uma função para embaralhar a ordem da lista.
