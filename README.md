# Instalar as Dependências

    npm install
    ou
    npm i

# Inicializar

    npm start

# Consultas Básicas

## Consultar - Usuario

    query{
        usuarios{
        nome
        id
        email

        }

    }

## Consultar - Usuario

### Por ID

    query{
        usuario(id:5){
            id
            nome
            email
            idade
        }
    }

## Novo Usuário

    mutation{
        novoUsuario(
            args:{
            nome:"joao",
            email:"jssseo@gmail.com",
            idade:23
            }
        ){
            nome
            email
            idade
        }
    }

## Alterando todos os campos

### Para alterar somente um campo!

basta informar somente o campo que deseja alterar , da mesma forma no retorno
informe somente o que irá retornar

## Filtar por ID

    mutation {
        alterarUsuario(
            args: {
                nome: "jota"
                email: "jota@jota"!
                idade: 55
                perfil: 1
                status: ATIVO
            }
            filtro: {

            }
        ) {
            id
            nome
            email
            idade
            perfil
            status
        perfil {
            id
            nome
        }
            status
        }
    }

## Alterando Somente um Campo

## Filtar por ID

    mutation {
        alterarUsuario(
        args: {
            idade: 55
        }
        filtro: {
            id: 5,
        }
    ) {
        id
        nome
        email
        idade
        perfil
        status
        perfil {
        id
        nome
    }
        status
    }
    }

## Alterando todos os campos

## Filtar por Email

    mutation {
        alterarUsuario(
            args: {
                nome: "jota"
                email: "jota@jota"!
                idade: 55
                perfil: 1
                status: ATIVO
        }
            filtro: {
                email: "danismi@umail.com"
        }
    ) {
        id
        nome
        email
        idade
        perfil
        status
        perfil {
        id
        nome
    }
        status
    }
    }

## Excluir

### Por ID

    mutation{
        excluirUsuario(
            filtro:{
                id:5
            }
    )
    {
        nome
        id
        email
    }

    }

## Excluir

### Por E-mail

    mutation{
        excluirUsuario(
            filtro:{
                email: "Cilene@umail.com"
            }
    ){
        nome
        id
        email
    }

    }
