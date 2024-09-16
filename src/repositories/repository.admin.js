import {execute} from "../database/sqlite.js";

async function Listar(){
    let sql = "select * from consulta;";
    const admin = await execute(sql, []);
    return admin;
}



export default {Listar};