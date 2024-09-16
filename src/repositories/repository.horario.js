import {execute} from "../database/sqlite.js";

async function Listar(){
    let sql = "select * from horario order by id_horario";
    const horario = await execute(sql, []);
    return horario;
}

export default {Listar};