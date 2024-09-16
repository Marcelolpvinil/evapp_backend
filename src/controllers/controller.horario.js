import serviceHorario from "../services/service.horario.js";

async function Listar(req, res){
    try {
        const horario = await serviceHorario.Listar();
        res.status(200).json(horario);

    } catch (error) {
        res.status(500).json({error});
    }
}

export default {Listar};