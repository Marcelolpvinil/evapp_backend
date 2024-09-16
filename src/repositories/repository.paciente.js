import {execute} from "../database/sqlite.js";



async function Login(email, senha){
    let sql = "select * from paciente where email = ? and senha = ?)";
    const paciente = await execute(sql, [email, senha]);
    return paciente;
}

async function Cadastrar(nome, telefone, email, senha){
    let sql = "insert into paciente (nome, telefone, email, senha, dt_cadastro) values (?, ?, ?, ?, CURRENT_TIMESTAMP)";
    const cadastro = await execute(sql, [nome, telefone, email, senha]);
    return cadastro;
}

export default {Cadastrar, Login};