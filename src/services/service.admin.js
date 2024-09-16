import repositoryAdmin from "../repositories/repository.admin.js";

async function Listar(){
    const admin = await repositoryAdmin.Listar();
    return admin;
}

export default {Listar};