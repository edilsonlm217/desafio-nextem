# Desafio-Nextem
Este projeto foi criado e desenvolvido como parte do processo seletivo da empresa Nextem. Esta é uma aplicação que gerencia tarefas no formato de dashboard onde é possível criar, editar, assinalar um responsável e definir um estado para cada tarefa.


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
