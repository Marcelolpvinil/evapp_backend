import serviceAdmin from "../services/service.admin.js";

async function Listar(req, res){
    try {
        const admin = await serviceAdmin.Listar();
        res.status(200).json(admin);

    } catch (error) {
        res.status(500).json({error});
    }
}

export default {Listar};