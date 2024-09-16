import {execute} from "../database/sqlite.js";

async function Confirmar(ID_PSICOLOGO,
    ID_HORARIO, ID_PACIENTE){
    let sql = "insert into consulta(ID_PSICOLOGO, ID_HORARIO, ID_PACIENTE) values(?,?,?);";
    const consulta = await execute(sql, [ID_PSICOLOGO,
        ID_HORARIO, ID_PACIENTE]);
    return consulta;
}

async function ListarConsulta(id_paciente){
    let sql = "select * from consulta where id_paciente = ?;";
    const consulta = await execute(sql, [id_paciente]);
    return consulta;
}

async function Deletar(id_paciente){
    let sql = "delete from consulta where id_paciente = ?;";
    const consulta = await execute(sql, [id_paciente]);
    return consulta;
}

export default {Confirmar, ListarConsulta, Deletar};