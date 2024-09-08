const { usuarios, proximoId } = require("../../../data/db");
const { validarEmail, validarEmailExistnte } = require("../../../data/validacoes/validarEmail")
const { validarIdUsuarios } = require("../../../data/validacoes/validarID")

const perfilDefault = 1;
const statuDefault = 'ATIVO'

// pode usar  a o operador expred .... usando o args
// ... args espalha todos os atributos que vem nos argumentos 
// quando você vai usar todos essa é a melhor forma
// caso contrario , você quira somente um ou dois itens ou de forma explicita usa-se { nome, email, idade }
// { nome, email, idade } ou args
module.exports = {

    novoUsuario(_, { args }) {
        validarEmail(args.email) // envia para a função de validação de email o email digitado

        const novo = {
            id: proximoId(),
            ...args,
            // nome,
            // email,
            // idade,
            perfil_id: perfilDefault,
            status: statuDefault
        }
        usuarios.push(novo)
        return novo
    },
    excluirUsuario(_, { filtro }) {
        const { id, email } = filtro
        console.log("id == " + id);

        if (id) {
            const indiceID = validarIdUsuarios(id)
            const excluido = usuarios.splice(indiceID, 1)
            return excluido ? excluido[0] : null
        } else if (email) {
            indiceEmail = validarEmailExistnte(email)
            const excluido = usuarios.splice(indiceEmail, 1)
            return excluido ? excluido[0] : nul
        } else {
            throw new error("Id e Email não Encontrado");
        }
        // const excluido = usuarios.splice(validarIdUsuarios, 1)
        // return excluido ? excluido[0] : null
    },
    alterarUsuario(_, args) {
        const indice = validarIdUsuarios(args.id) // Obter o índice do usuário

        // Atualiza o usuário no índice encontrado com os novos dados
        const usuarioAlterado = {
            ...usuarios[indice], // Mantém os dados existentes
            ...args // Substitui pelos novos dados
        }

        // Substitui o usuário antigo pelo atualizado
        usuarios.splice(indice, 1, usuarioAlterado)
        return usuarioAlterado
    }
}

