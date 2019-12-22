# Desafio-Nextem
Este projeto foi criado e desenvolvido como parte do processo seletivo da empresa Nextem. Esta é uma aplicação que gerencia tarefas no formato de dashboard onde é possível criar, editar, assinalar um responsável, definir um estado e deadline para cada tarefa.

## Como usar
O usuário e senha padrão para esta aplicação é:
      
      usuário: test@nextem.com.br
      senha: 1234
      
## Como esta aplicação foi construída
O backend desta aplicação está rodando uma API Rest construída utilizando NodeJS e Express. Quanto ao banco de dados, toda a criação de tabelas, relacionamentos e queries está sendo feito através do ORM Sequelize que possibilita a utilização de javascript para realizá-los.
A autenticação do usuário está utilizando jsonwebtoken possibilitando que a aplicação impeça o acesso de suas rotas por usuários não autenticados.

O frontend foi construido interiamente utilizando Javascript e utilizando como principal biblioteca o ReactJS.


## Pre-requisitos
Para rodar este projeto você precisa:

      Ter instalado em sua máquina o NodeJS (https://nodejs.org/en/download/package-manager)
      Ter instalado em sua máquina o Yarn (https://yarnpkg.com/en)
      Ter instalado em sua máquina o Docker Toolbox (instalação e configuração descritas abaixo)
      Ter instalado em sua máquina o Postbird (instalação e configuração descritas abaixo)

## Instalando e configurando o Docker Toolbox
Para rodar esta aplicação em ambiente de desenvolvimento é necessário a instalação do Docker Toolbox. Todos os passos necessários à instalação encontram-se nos links abaixo bem como os requisitos mínimos para sua instalação:

        macOS: https://docs.docker.com/toolbox/toolbox_install_mac/
        Windows: https://docs.docker.com/toolbox/toolbox_install_windows/

Uma vez instalado, abra o programa Docker Toolbox. Ele leva um tempo para inicializar, mas assim tudo está finalizado você deverá estar vendo um terminal como o do link abaixo:

        https://ibb.co/z5x56Qj

Neste terminal, rode o comando abaixo para criar um container do database postgres:
        
        docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres:11

Aguarde o fim do download e pronto! Neste momento você ja possui uma instancia do banco de dados postgres rodando dentro de um container docker.

## Criando o database
Agora precisamos criar a conexão com o postbird e dar um nome ao database

Para visualização do banco que acabamos de criar, istale o Postbird através do seguinente link e escolha a versão que se adeque ao seu sistema operacional.

        https://electronjs.org/apps/postbird
    
 Abra o programa ao finalizar a instalação e defina os parametros de conexão:
 
        Host: (coloque aqui o IP que o docker pegou. Veja como identificar neste link: https://ibb.co/5FhvSfN)
        Port: 5432
        Username: postgres
        Password: docker

Uma vez conectado, vá até o campo [Select Database] e cria um database com a seguinte configuração:

        Database: nextem
        Template (deixa em branco)
        Encoding: UTF8
        
Finalizado! Agora toda a estrutura de tabelas e relacionamentos será criada automaticamente pelo código do backend.

## Baixando e instalando a aplicação.
Crie uma pasta local em seu computador e chame-a de "nextem". Baixe as pastas backend e frontend para dentro dela. Após o download, navegue até a pasta "nextem" através de um terminal de sua preferencia.

## Rodando o backend
Navegue até a pasta nextem/backend com seu terminal. Primeiramente, execute o comando "yarn" para instalação das dependencias do projeto. Aguarde a finalização.

### Configurando algumas variaveis de ambiente
Algumas variaveis podem mudar de um ambiente de desenvolvimento para outro e aqui faremos a configuração para que tudo rode perfeitamente.

Ainda no terminal, abra o projeto no VSCode utilizando o comando "code ."
Vá até o arquivo ".env" e nas variaveis referentes ao banco de dados, certifique-se que estejam configuradas conforme abaixo:

        DB_HOST= (coloque aqui o IP que o docker pegou. Veja como identificar neste link: https://ibb.co/5FhvSfN)
        DB_USER=postgres
        DB_PASS=docker
        DB_NAME=nextem

### Criar tabelas e relacionamentos
Para criar as tabelas do banco de dados, seus relacionamentos e populá-las, existem 2 scripts configurados que farão todo o processo. Basta rodá-los. juntamente com o comando "yarn dev" que colocará a API para rodar.
De volta no terminal, rode os três comandos abaixo na respectiva ordem:

         yarn db
         yarn seeds
         yarn dev

Pronto! As tabelas no banco de dados estão criadas e populadas e nossa API está rodando.

## Rodando o frontend
Por o frontend para rodar consiste basciamente dos mesmos steps, no entando o comando yarn a ser utilizado não é o mesmo. Navegue até a pasta nextem/frontend com seu terminal. Primeiramente, execute o comando "yarn" para instalação das dependencias do projeto. Aguarde a finalização. Em seguida, rode o comando "yarn start" e pronto. Já teremos o frontend rodando.

O navegador será inicializado automaticamente no endereço http://localhost:3000/
Se o navegador não for iniciado automaticamente, digite em seu browser o endereço http://localhost:3000/
