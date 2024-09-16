import repositoryHorario from "../repositories/repository.horario.js";

async function Listar(){
    const horario = await repositoryHorario.Listar();
    return horario;
}

export default {Listar};