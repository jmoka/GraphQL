# Instalar as Dependências

    npm install
    ou
    npm i

# Iniciallizar

    npm start

# Consultas Básicas

## Consultar

query{
usuarios{
nome
id
email

}
}

## Excluir

### Por ID

mutation{
excluirUsuario(
filtro:{
id:5
}  
){
nome
id
email
}

}

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

## Elterar
