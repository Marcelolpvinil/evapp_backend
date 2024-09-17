import servicePaciente from "../services/service.paciente.js";

async function Login(req, res) {
    try {
        const { email, senha } = req.body;
        const paciente = await servicePaciente.Login(email, senha);
        if (!paciente) {
            return res.status(401).json({ mensagem: "Credenciais inválidas" });
        }
        res.json(paciente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ mensagem: "Erro no login" });
    }
}



async function Cadastrar(req, res) {
    try {
        const { nome, telefone, email, senha } = req.body;
        const cadastro = await servicePaciente.Cadastrar(nome, telefone, email, senha);
        res.status(201).json({ mensagem: "Cadastro realizado com sucesso", cadastro });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao cadastrar" });
    }
}


export default {Login, Cadastrar};