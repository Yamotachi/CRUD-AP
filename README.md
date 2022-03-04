![image](https://user-images.githubusercontent.com/78673503/156687595-f1aa7491-ac57-46df-9870-581811faaed9.png)

## Sobre o projeto

Esse projeto foi criado como uma avaliação técnica da Secretaria Municipal de Gestão da Bahia e o projeto consiste em um CRUD (create, read, update and delete) simples e prático, utilizando interfaces (front-end) em Reactjs, funções com hooks e autenticação com o Laravel, utilizado via API.

- Front-end: Reactjs
- Back-end: Laravel
- Database (alimentada com schema migrations): MySQL

## Como rodar

Primeiramente, o Xampp deve estar instalado na máquina e com o servidor Apache + MySQL em execução. O httpd.conf deve possuir o diretório onde o projeto foi clonado, por conta de estar rodando em localhost (Ex.: 127.0.0.1:3306, 127.0.0.1:8000, localhost:3306, localhost:4200, localhost:8000), como informado no arquivo ".env".

![image](https://user-images.githubusercontent.com/78673503/156687161-9790be69-1d4b-4490-9c75-7e457b3c5ee1.png) ![image](https://user-images.githubusercontent.com/78673503/156687195-6e9ddac8-ba3e-43a1-b9f1-10d99f049aae.png)

No terminal, você deve acessar a pasta do projeto e rodar o comando "php artisan serve", que inicia um servidor para a aplicação ser acessada via localhost.
![image](https://user-images.githubusercontent.com/78673503/156687753-b9bf0041-537e-4214-86a5-2441d232d383.png)

Para acessar a página incial do sistema, basta acessar o seu link local/user, como por exemplo:
![image](https://user-images.githubusercontent.com/78673503/156687996-744feab8-b471-482c-a5b9-ce48703769b7.png)



