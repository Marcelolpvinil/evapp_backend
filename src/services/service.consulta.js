import repositoryConsulta from "../repositories/repository.consulta.js";

async function Confirmar(ID_PSICOLOGO,
    ID_HORARIO, ID_PACIENTE){
    const consulta = await repositoryConsulta.Confirmar(ID_PSICOLOGO,
        ID_HORARIO, ID_PACIENTE);
    return consulta;
}

async function ListarConsulta(id_paciente){
    const consulta = await repositoryConsulta.ListarConsulta(id_paciente);
    return consulta;
}

async function Deletar(id_paciente){
    const consulta = await repositoryConsulta.Deletar(id_paciente);
    return consulta;
}
export default {Confirmar, ListarConsulta, Deletar};