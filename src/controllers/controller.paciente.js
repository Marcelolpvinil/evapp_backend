import servicePaciente from "../services/service.paciente.js";

async function Login (req, res) {

   try {
    const {email, senha} = req.body;
    const paciente = await servicePaciente.Login(email, senha);
    res.json(paciente);

    
   } catch (error ) {
    console.error(500).json({mensagem: "Erro no login"})
   }
}


async function Cadastrar(req, res){
    try {
        const {nome, telefone, email, senha} = req.body;
        const cadastro = await servicePaciente.Cadastrar(nome, telefone, email, senha);
        res.status(200).json(cadastro);

    } catch (error) {
        res.status(500).json({error});
    }
}

export default {Login, Cadastrar};