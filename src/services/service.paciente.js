import repositoryPaciente from "../repositories/repository.paciente.js";


const Login = async (email, senha) => {
    try {
        const paciente = await repositoryPaciente.Login(email, senha);
        return paciente;
    } catch (error) {
        throw error;
    }
}

async function Cadastrar(nome, telefone, email, senha){
    const cadastro = await repositoryPaciente.Cadastrar(nome, telefone, email, senha);
    return cadastro;
}

export default {Cadastrar, Login};