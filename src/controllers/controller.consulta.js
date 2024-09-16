import serviceConsulta from "../services/service.consulta.js";

async function Confirmar(req, res){
    try {
        const {ID_PSICOLOGO, ID_HORARIO, ID_PACIENTE} = req.body;
        const consulta = await serviceConsulta.Confirmar(ID_PSICOLOGO,
            ID_HORARIO, ID_PACIENTE);
        res.status(200).json(consulta);

    } catch (error) {
        res.status(500).json({error});
    }
}

async function ListarConsulta(req, res){
    try {
        const {id_paciente} = req.params;
        const consulta = await serviceConsulta.ListarConsulta(id_paciente);
        res.status(200).json(consulta);

    } catch (error) {
        res.status(500).json({error});
    }
}

async function Deletar(req, res){
    try {
        const {id_paciente} = req.params;
        const consulta = await serviceConsulta.Deletar(id_paciente);
        res.status(200).json(consulta);

    } catch (error) {
        res.status(500).json({error});
    }
}
export default {Confirmar, ListarConsulta, Deletar};